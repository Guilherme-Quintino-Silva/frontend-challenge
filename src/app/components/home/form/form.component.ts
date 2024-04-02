import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CreateUsersService } from 'src/app/services/create-users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  protected formGroup: FormGroup;
  protected alertBoolean: boolean = false;
  protected messageErrorAlert: string = "Caracteres não permitidos na senha.";
  constructor(
    protected formBuilder: FormBuilder,
    protected createrUserService: CreateUsersService,
  ) {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  protected sendPayload(): void {
    this.createrUserService.userPost(this.formGroup.value).subscribe({
      next: () => {
        console.log('Sucessfully requisition')
      },
      complete: () => console.log('Complete requisition'),
      error: (err) => {
        console.error('error in the requisition: ', err);
        this.alertBoolean = true;
      }
    });
  }
}
