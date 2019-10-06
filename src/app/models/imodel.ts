import {FormGroup, ValidatorFn} from '@angular/forms';
import {FieldProps} from './field-props';

export interface IModel {
  getFieldProps(): { [key: string]: FieldProps };

  getValidators(form: FormGroup): { [key: string]: Array<ValidatorFn> };

  toDto(): void;
}
