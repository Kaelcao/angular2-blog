"use strict";
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.emailInvalid = function (control) {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (control.value != "" && !re.test(control.value)) {
            return { "emailInvalid": true };
        }
        // return {"emailInvalid": true};
        return null;
    };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=EmailValidator.js.map