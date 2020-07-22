import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  templateUrl: './reactive-demo.component.html',
  styleUrls: ['./reactive-demo.component.css']
})
export class ReactiveDemoComponent implements OnInit {
  myForm: FormGroup
  uName: FormControl
  uEmail: FormControl
  uPassword: FormControl
  createForm() {
    this.myForm = new FormGroup({
      name: this.uName,
      email: this.uEmail,
      password: this.uPassword
    })
  }

  createFormControls() {
    this.uName = new FormControl('', [Validators.required, Validators.minLength(5)])
    this.uEmail = new FormControl('', [Validators.required, Validators.email , this.emailDomainValidator])
    this.uPassword = new FormControl('', Validators.required)
  }
  constructor() { }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  submit() {
    console.log("Submit Called", this.myForm.value);
  }

  emailDomainValidator(control : FormControl){
    let email = control.value;
    if(email && email.indexOf("@")!=-1){
      let [_,domain] = email.split("@");
      if(domain!=="ideas.com"){
        return {
          emailDomain : {
            parsedDomain : domain
          }
        }
      }
    }
    return null;
  }

}
