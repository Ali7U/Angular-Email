import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  signedin$: BehaviorSubject<boolean | null>;
  items: MenuItem[];
  username:string

  constructor(private authService: AuthService, private router: Router) {
    this.signedin$ = this.authService.signedIn$;
    this.items = [
      {
        label: 'Signout',
        command: () => {
          this.router.navigate(['signout']);
        },
      },
    ];
  }

  ngOnInit(): void {
    this.authService.checkAuth().subscribe((username) =>{
      this.username = username.username
      console.log(this.username);
    });
    
  }
}
