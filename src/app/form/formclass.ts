import { FormGroup, FormControl } from '@angular/forms';

/**
 * 
 * 
 * @export
 * @class FormClass
 * @desc super class for all the places where forms are used. Contains validations based functions.
 * @prerequisites form validationModel should be in the format:
 *  'controlName' : {
        'errorMessgesDisplay': '',
        'errorMessages': {
            'criteria': 'Message when criteria is not fulfilled.',
            ...
        }
    },
    ...
 */
export class FormClass {
    constructor() {}
    public onValueChanged(form: FormGroup, formValidationModel: any, index?: number) {
        // to subscribe for a location, will be called on value change event for a form control group
        if (!form) { return; }

        // if any messages defined for validation, get value from error list and display
        for (let field in formValidationModel) {

            if (field === 'index') {
                continue;
            }
            

            // clear previous error message (if any)
           formValidationModel[field]['errorMessgesDisplay'] = '';

            // choose the control name to be referred to.
            let control: FormControl = <FormControl>form.controls[field];

            if (control && control.dirty && !control.valid) {
                // see if the control being reffered to is having any changes.
                let messages = formValidationModel[field]['errorMessages'];

                for (let key in control.errors) {
                    // there can be more than one validation break, so concatenate the messages.
                     formValidationModel[field]['errorMessgesDisplay'] += messages[key] + ' ';
                }
            }
        }
        if (typeof index !== 'undefined') {
            // dealing with multiple forms of same type
             return {validationModel: formValidationModel, rowIndex: index};
        } else {
            // dealing with single form.
            return formValidationModel;
        }
    }
}
