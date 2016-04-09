import {Component} from "angular2/core";
import {FormBuilder} from "angular2/common";
import {OnInit} from "angular2/core";
/**
 * Created by Lawrence on 4/7/16.
 */
@Component({
    selector: 'data-driven-form',
    template: `
        <h2>Sign-up Form</h2>
        <form (ngSubmit)="onSubmit()">
            <div>
                <label for="mail">Mail</label>
                <input type="text" id="mail" required/>
                <span class="validation-error">Not Valid</span>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="text" id="password" required/>
                 <span class="validation-error">Not Valid</span>
            </div>
            <div>
                <label for="confirm_password">Confirm Password</label>
                <input type="text" id="confirm_password" required/>
                 <span class="validation-error">Not Valid</span>
            </div>
            <button type="submit">Submit </button>
        </form>
        <h2>You submitted:</h2>
        <div>Mail: {{user.mail}}</div>
        <div>Password: {{user.pass}}</div>
    `
})

export class DataDrivenFormComponent implements OnInit{
    user = {'mail': '', 'pass': ''}

    constructor(private _formBuilder:FormBuilder) {

    }


    ngOnInit():any {
        return null;
    }

    onSubmit(form) {

    }
}
