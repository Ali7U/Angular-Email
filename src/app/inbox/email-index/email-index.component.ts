import { Component, OnInit } from '@angular/core';
import { EmailService, EmailSummary } from '../email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrl: './email-index.component.css',
})
export class EmailIndexComponent implements OnInit {
  emails: EmailSummary[] = [];
  isLaoding: boolean = false;
  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.isLaoding = true
    this.emailService.getEmails().subscribe((emails) => {
      this.emails = emails;
      this.isLaoding = false
    });
  }
}
