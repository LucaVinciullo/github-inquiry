import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-commits-container',
  templateUrl: './commits-container.component.html',
  styleUrls: ['./commits-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitsContainerComponent {
  constructor() { }
}
