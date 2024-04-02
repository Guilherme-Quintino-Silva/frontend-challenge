import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  // change detection is actived when input changed.
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {
  @Input() message: string = "";
  constructor() { }

}
