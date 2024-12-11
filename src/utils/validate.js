import validation from './validate.js';
import Messages from "./message";

let constraints = {
  email: {
    presence: {
      allowEmpty: false,
      message: Messages.EmailBlank,
    },
    email: {
      message: Messages.EmailInvalid,
    },
    // length: {
    //   minimum: 6,
    //   message: Messages.pwdLenght
    // }
  },
  firstname: {
    presence: {
      allowEmpty: false,
      message: Messages.firstNameBlank,
    },
  },
  lastname: {
    presence: {
      allowEmpty: false,
      message: Messages.lastNameBlank,
    },
  },
  password: {
    presence: {
      allowEmpty: false,
      message: Messages.PasswordBlank,
    },
    format: {
        pattern:/^(?=.*\d)(?=.*[A-Z]).{6,30}$/,
        message: Messages.PasswordStrong,
    },
  },
  /*  phoneNumber: {
        presence: {
            allowEmpty: false,
            message: Messages.PhoneBlank
        },
        length: {
            minimum: 10,
            message: Messages.PhoneInvalid
        }
    },
    resetPasswordCode: {
        presence: {
            allowEmpty: false,
            message: Messages.ResetPasswordCodeBlank
        },
        length: {
            minimum: 6,
            message: Messages.ResetPasswordCodeInValid
        }
    } */
};

function validate(fieldName, value) {
  let formValues = {};
  formValues[fieldName] = value;

  let formFields = {};
  formFields[fieldName] = constraints[fieldName];

  let result = validation(formValues, formFields, { fullMessages: false });

  if (result) {
    return result[fieldName][0];
  }
  return null;
}

export default validate;