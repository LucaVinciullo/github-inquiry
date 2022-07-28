import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AbstractComponentClass} from 'src/app/shared/components/abstract/abstract-component.class';
import {ReposForm} from '../../model/repos-form.interface';

@Component({
  selector: 'app-repos-form-component',
  templateUrl: './repos-form-component.component.html',
  styleUrls: ['./repos-form-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReposFormComponentComponent extends AbstractComponentClass implements OnInit {
  form: FormGroup;

  @Output() searchEvent = new EventEmitter<ReposForm>();

  constructor(vcr: ViewContainerRef, private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    super(vcr);
    this.form = fb.group({
      searchBy: ['name', Validators.required],
      name: ['', Validators.required],
      language: [''],
      stars: [],
      issue: ['', Validators.required]
    });
    this.subscription.add(
      this.form.get('searchBy')?.valueChanges.subscribe(searchBy => {
        this.enableControls(searchBy);
      })
    );
  }

  ngOnInit(): void {
    this.enableControls(this.form.get('searchBy')?.value);
  }

  search() {
    this.searchEvent.emit(this.form.getRawValue());
  }

  private enableControls(searchBy: 'name' | 'issue'): void {
    const nameControls = ['name', 'language', 'stars'];
    if (searchBy === 'issue') {
      for (const name of nameControls) {
        this.form.get(name)?.disable();
        this.form.get(name)?.setValue('');
      }
      this.form.get('issue')?.enable();
    } else {
      for (const name of nameControls) {
        this.form.get(name)?.enable();
      }
      this.form.get('issue')?.disable();
      this.form.get('issue')?.setValue('');
    }
    this.cdr.markForCheck();
  }
}
