import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-repos-form-component',
  templateUrl: './repos-form-component.component.html',
  styleUrls: ['./repos-form-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReposFormComponentComponent {
  constructor() { }
}
