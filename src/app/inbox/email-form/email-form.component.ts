import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Email, EmailFormControls } from '../email';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css',
})
export class EmailFormComponent implements OnInit {
  emailForm: FormGroup<EmailFormControls>;
  @Input() email: Email;
  @Output() emailSubmit = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    const { to, from, subject, text } = this.email;

    this.emailForm = new FormGroup<EmailFormControls>({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({ value: from, disabled: true }),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
    });

    console.log(this.emailForm.controls?.['from'].value);
  }

  onSubmit() {
    if (this.emailForm.invalid) {
      return;
    }

    console.log(this.emailForm.value);
    this.emailSubmit.emit(this.emailForm.value);
    // console.log(this.emailForm.getRawValue());
  }
}
