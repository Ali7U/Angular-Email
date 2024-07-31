import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { AuthService } from '../../auth/auth.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrl: './email-create.component.css',
})
export class EmailCreateComponent implements OnInit {
  showModal: boolean = false;
  isReplay: boolean = false;
  label: string = 'Send';
  modalTitle: string = 'Compose';
  email: Email;
  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      text: '',
      html: '',
      from: '',
    };
  }

  ngOnInit(): void {
    this.email.from = `${this.authService.username}@angular-email.com`;
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(()=>{
      this.showModal = false
    })
  }
}
