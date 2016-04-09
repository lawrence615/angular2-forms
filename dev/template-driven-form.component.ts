import {Component} from "angular2/core";
/**
 * Created by Lawrence on 4/7/16.
 */
@Component({
    selector: 'template-driven-form',
    template: `
        <h2>Sign-up Form</h2>
        <form (ngSubmit)="onSubmit(f)" #f="ngForm">
            <div>
                <label for="mail">Mail</label>
                <input ngControl="mail" type="text" id="mail" required #email="ngForm"/>
                <span class="validation-error" *ngIf="!email.valid">Not Valid</span>
            </div>
            <div>
                <label for="password">Password</label>
                <input ngControl="password" type="text" id="password" required  #password="ngForm"/>
                 <span class="validation-error" *ngIf="!password.valid">Not Valid</span>
            </div>
            <div>
                <label for="confirm_password">Confirm Password</label>
                <input ngControl="confirm_password"  type="text" id="confirm_password" required  #confirm_password="ngForm"/>
                 <span class="validation-error" *ngIf="!confirm_password.valid">Not Valid</span>
            </div>
            <button type="submit" [disabled]="!f.valid ||password.value !== confirm_password.value ">Submit </button>
        </form>
        <h2>You submitted:</h2>
        <div>Mail: {{user.mail}}</div>
        <div>Password: {{user.pass}}</div>
    `
})

export class TemplateDrivenFormComponent {
    user = {'mail': '', 'pass': ''}

    onSubmit(form) {
        //console.log(form.value);
        this.user.mail = form.value['mail']
        this.user.pass = form.controls['password'].value
    }
}
