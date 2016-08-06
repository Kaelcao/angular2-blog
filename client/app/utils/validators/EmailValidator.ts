import {AbstractControl} from "@angular/forms";

export class EmailValidator {
    static emailInvalid(control: AbstractControl) {
        let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (control.value != "" && !re.test(control.value)) {
            return {"emailInvalid": true};
        }

        // return {"emailInvalid": true};
        return null;
    }

}