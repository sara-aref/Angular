import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  producForm: FormGroup;

  constructor() {
    this.producForm = new FormGroup ({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      username: new FormControl('',[
        Validators.required,
        this.noSpacesValidator
      ]),
      passwd: new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
      ]),
      /*confirmPasswd: new FormControl('',[
        Validators.required,
        this.matchPassword.bind(this)
      ])*/
    })
  }

  noSpacesValidator(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.indexOf(' ') >= 0) {
      return { 'noSpaces': true };
    }
    return null;
  }

/*  matchPassword(control: FormControl): { [key: string]: boolean } | null {
    const passwdControl = this.producForm.get('passwd');

    if (!passwdControl) {
      return null; // Handle case where passwdControl is null
    }
    if (control.value && passwdControl.value && control.value !== passwdControl.value) {
      return { 'mismatch': true };
    }
    return null;
  }*/

  handleSubmitForm() {
    console.log(this.producForm);
  }
}
