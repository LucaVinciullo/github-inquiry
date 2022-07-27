import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commits-form',
  templateUrl: './commits-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitsFormComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
