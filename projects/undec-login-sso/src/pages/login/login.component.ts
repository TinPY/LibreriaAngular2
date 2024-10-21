import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private router: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem('undec-token')) {
      this.router.navigate(['/home']);
    }
  }

  login(): void {
    const locationBase64 = window.btoa(unescape(encodeURIComponent(window.location.origin + "#/home")))
    const authUrl = "http://localhost:8899/auth/login?state=" + locationBase64
    window.location.assign(authUrl);
  }
}
