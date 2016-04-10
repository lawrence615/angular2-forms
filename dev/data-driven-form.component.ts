import {Component} from "angular2/core";
import {FormBuilder} from "angular2/common";
import {OnInit} from "angular2/core";
import {ControlGroup} from "angular2/common";
import {Validators} from "angular2/common";
/**
 * Created by Lawrence on 4/7/16.
 */
@Component({
    selector: 'data-driven-form',
    template: `
        <h2>Sign-up Form</h2>
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
            <div>
                <label for="mail">Mail</label>
                <input [ngFormControl]="myForm.controls['email']" type="text" id="mail" #mail="ngForm"/>
                <span class="validation-error" *ngIf="!mail.valid">Not Valid</span>
            </div>
            <div>
                <label for="password">Password</label>
                <input [ngFormControl]="myForm.controls['password']" type="text" id="password" #password="ngForm"/>
                 <span class="validation-error"  *ngIf="!password.valid">Not Valid</span>
            </div>
            <div>
                <label for="confirm_password">Confirm Password</label>
                <input [ngFormControl]="myForm.controls['confirmPassword']" type="text" id="confirm_password" #confirm_password="ngForm"/>
                 <span class="validation-error"  *ngIf="!confirm_password.valid">Not Valid</span>
            </div>
            <button type="submit">Submit </button>
        </form>
        <h2>You submitted:</h2>
        <div>Mail: {{user.email}}</div>
        <div>Password: {{user.password}}</div>
    `
})

export class DataDrivenFormComponent implements OnInit{
    user = {'email': '', 'password': ''}

    myForm: ControlGroup;

    constructor(private _formBuilder:FormBuilder) {

    }


    ngOnInit():any {
        this.myForm = this._formBuilder.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required],
            'confirmPassword': ['', Validators.required]
        })
    }

    onSubmit(form) {
        this.user = this.myForm.value;
    }
}
