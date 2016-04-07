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
                <input ngControl="mail" type="text" id="mail" required/>
            </div>
            <div>
                <label for="password">Password</label>
                <input ngControl="password" type="text" id="password" required/>
            </div>
            <div>
                <label for="confirm_password">Confirm Password</label>
                <input ngControl="confirm_password"  type="text" id="confirm_password" required/>
            </div>
            <button type="submit">Submit </button>
        </form>
    `
})

export class TemplateDrivenFormComponent {

    onSubmit(form) {
        console.log(form.value);
    }
}
