import { FormGroup } from '@angular/forms';

export class PasswordValidator {

  static validate(formreg: FormGroup) {
    let password = formreg.value.password;
    let confirm = formreg.value.confirm;
    if ( confirm === password) {
      return { validPassword: true };
    }

    return null;
  }

}
