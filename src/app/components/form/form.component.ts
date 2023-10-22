import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputObject } from 'src/types';

@Component({
  selector: 'app-password',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  formGroup: FormGroup;

  @Output() inputData = new EventEmitter<InputObject>();

  constructor() {
    this.formGroup = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onInputKeyUp(value: string) {
    const status = this.formGroup.status;
    this.inputData.emit({ value, status });
  }
}
