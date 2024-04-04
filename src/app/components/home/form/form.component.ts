import { Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateUsersService } from 'src/app/services/create-users.service';
import { UserCreate, UserError } from 'src/app/utils/user-create';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  protected formGroup: FormGroup;
  protected alertBoolean: boolean = false;
  protected messageErrorAlert!: string;
  protected textShow: string = 'Mostrar senha';
  protected booleanOcult: boolean = false;

  @ViewChild('passwordOcult') passwordOcult!: ElementRef;

  constructor(
    protected formBuilder: FormBuilder,
    protected createrUserService: CreateUsersService,
    protected renderer: Renderer2
  ) {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  protected sendPayload(): void {
    this.createrUserService.userPost(this.formGroup.value).subscribe({
      next: (sucess: UserCreate) => {
        this.messageErrorAlert = sucess.messageSucess;
        this.alertBoolean = true;
        this.temporization();
      },
      complete: () => console.log('Complete requisition'),
      error: (err: UserError) => {
        this.messageErrorAlert = err.error.errorMessage;
        this.alertBoolean = true;
        this.temporization();
      }
    })
  }

  protected temporization(): void {
    setTimeout(() => {
      this.alertBoolean = false;
    }, 3000);
  }

  protected ocultPassworld(): void {
    this.booleanOcult = !this.booleanOcult;
    this.passwordOcult.nativeElement.type = this.booleanOcult ? 'text' : 'password';
    this.textShow = this.booleanOcult ? 'Ocultar senha' : 'Mostrar senha';
  }
}
