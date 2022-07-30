import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnChanges, OnDestroy,
  OnInit, Output, SimpleChanges, ViewContainerRef
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AbstractComponentClass } from 'src/app/shared/components/abstract/abstract-component.class';
import { ReposForm } from '../../model/repos-form.interface';

@Component({
  selector: 'app-repos-form-component',
  templateUrl: './repos-form-component.component.html',
  styleUrls: ['./repos-form-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReposFormComponentComponent extends AbstractComponentClass implements OnInit, OnChanges, OnDestroy {
  form: FormGroup;

  @Input() formData: ReposForm | null = null;

  @Output() searchEvent = new EventEmitter<ReposForm>();
  @Output() saveFormDataEvent = new EventEmitter<ReposForm>();

  @HostListener('keydown', ['$event.target'])
  onkeydown(event: KeyboardEvent) {
    if (event.key === 'ENTER' && this.form.valid) {
      this.search();
    }
  }

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

  ngOnChanges(changes: SimpleChanges): void {
    // eslint-disable-next-line dot-notation
    const formData = changes['formData']?.currentValue;
    if (formData) {
      this.form.patchValue(formData);
      this.cdr.markForCheck();
    }
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.saveFormDataEvent.emit(this.form.getRawValue());
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
