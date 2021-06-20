import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {   FormBuilder,
  FormGroup,
  Validators,
  FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminAuthValidation } from '../form/common';
import { FormClass } from '../form/formclass';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends FormClass implements OnInit {

  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;
  orderManagementForm: FormGroup;
  private validationElem = new AdminAuthValidation();

  public adminAuthFormValidationModel: any = {
    username: this.validationElem.username,
    password: this.validationElem.password,
  };

  checked: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    super();
   }

  ngOnInit() {
    this.loadFormData();
    let name = localStorage.getItem('username');
    if(name && name != null){
      this.orderManagementForm.get('username').setValue(name)
    }
    let pswrd = localStorage.getItem('password');
    if(pswrd && pswrd != null){
      this.orderManagementForm.get('password').setValue(pswrd);
    }
    document.getElementById("username").focus();
  }
  
  loadFormData(){
    this.orderManagementForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required,],
    });
    this.orderManagementForm.valueChanges.subscribe((data) => {
      this.adminAuthFormValidationModel = super.onValueChanged(
        this.orderManagementForm,
        this.adminAuthFormValidationModel
      );
    });
  }

  saveLoginData(event){
    if(!this.checked){
      this.checked = true;
    } else{
      this.checked = false;
    }
    // if we store these values in service file, then on screen refresh everything will be lost. currently we dont have any backend, so we are storing it in localStorage(even it is not a good way)
    if(this.orderManagementForm.get('username').value != null && this.orderManagementForm.get('password').value != null && this.checked){
      if(this.orderManagementForm.valid){
      localStorage.setItem('username',this.orderManagementForm.get('username').value);
      localStorage.setItem('password',this.orderManagementForm.get('password').value);
      }
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
  }

  login(){
    this.router.navigate(["/manage-orders"], {
      relativeTo: this.route,
    });
  }

}
