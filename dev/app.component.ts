import {Component} from 'angular2/core';
import {TemplateDrivenFormComponent} from "./template-driven-form.component";
import {DataDrivenFormComponent} from "./data-driven-form.component";

@Component({
    selector: 'my-app',
    template: `
        <data-driven-form></data-driven-form>
    `,
    directives:[DataDrivenFormComponent]
})
export class AppComponent {

}
