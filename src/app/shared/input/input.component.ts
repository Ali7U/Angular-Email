import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent implements OnInit {
  @Input() label: string = '';
  @Input() controlName: FormControl = new FormControl('');
  @Input() inputType: string = '';
  @Input() controlType: string = 'input';

  constructor() {}

  ngOnInit(): void {}

  showErrors() {
    const { dirty, touched, errors } = this.controlName;
    return dirty && touched && errors;
  }
}
