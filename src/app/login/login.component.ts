import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EcomService } from '../services/ecom.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm!:FormGroup
  loginForm: any;

  constructor(private formBuilder: FormBuilder,private service:EcomService ,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password:['',Validators.required]
      
    });
  }
  login()
  {
    this.service.register(this.loginForm.value).subscribe({
    //   next(value) {
    //     console.log(value);
    //     this.router.navigate(['/product']);
    //   },
    next: (val) => { this.router.navigate(['/']); },
      error: (val) => { console.log(val) }
      })

  }

}
