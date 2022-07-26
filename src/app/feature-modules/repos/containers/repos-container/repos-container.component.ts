import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-repos-container',
  templateUrl: './repos-container.component.html',
  styleUrls: ['./repos-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReposContainerComponent {
  constructor() { }
}
