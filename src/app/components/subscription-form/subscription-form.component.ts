import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css'],
})
export class SubscriptionFormComponent {
  buttonText: string = 'Subscribe';
  emailRegEx = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(this.emailRegEx)
    ])
  });

  showErrors: boolean = false;
  showSuccess: boolean = false;

  onSubmit() {
    this.showErrors = true;

    if (this.form.valid) {
      this.buttonText = 'Subscribed';
      this.form.controls.email.disable();
      this.showSuccess = true;

      setTimeout(()=> {
        alert('Demo only, no real emails will be sent.');
      }, 1500);
    }
  }
}