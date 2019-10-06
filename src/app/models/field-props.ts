import _ from 'lodash';

interface ICommonFieldProps {
  fieldName?: string;
  label?: string;
  class?: string;
  revalidate?: boolean;
  visible?: boolean;
  loading?: boolean;
  valueField?: string;
  textField?: string;
  disabled?: boolean;
  required?: boolean;

  mapper?(): any | null;
}

interface IDropdownFieldProps extends ICommonFieldProps {
  dropdownOptions: Array<any>;
}

interface IContactPicker extends ICommonFieldProps {
  contactType?: string;
  showPreview?: boolean;
  searchByNameOnly?: boolean;
  idPropName?: string;
  includePhoneLog?: boolean;
  allowFreeForm?: boolean;
  contactCategory_IDs?: string;
  employeeRole_IDs?: string;
}

interface IPhonePicker extends ICommonFieldProps {
  idPropName?: string;
  autoFocus?: boolean;
}

interface IAutocompleteProps extends ICommonFieldProps {
  filteredList: Array<any>;
  noDataMessage: string;
}

interface IMultiselectProps extends ICommonFieldProps {
  multiselectList: Array<any>;
}

export class FieldProps implements ICommonFieldProps,
  IDropdownFieldProps,
  IAutocompleteProps,
  IMultiselectProps,
  IContactPicker,
  IPhonePicker {
  // Common properties
  label: string = null;
  class: string = null;
  revalidate: boolean = true;
  fieldName: string = null;
  loading: boolean = false;
  valueField: string = 'id';
  textField: string = 'name';
  disabled: boolean = false;
  required: boolean = false;

  visible: boolean = true;
  mapper = null;

  // Contact Picker Properties
  contactType: string = null;
  searchByNameOnly: boolean = null;
  showPreview: boolean = null;
  idPropName: string = null;
  includePhoneLog: boolean = false;
  allowFreeForm: boolean = false;
  contactCategory_IDs: string = null;
  employeeRole_IDs: string = null;

  // Phone Picker Properties
  autoFocus: boolean = null;

  // Dropdown properties
  dropdownOptions: Array<any> = null;

  // Autocomplete properties for Kendo
  filteredList: Array<any> = null;
  noDataMessage: string = null;

  // Multiselect properties
  multiselectList: Array<any> = null;

  public constructor(data?: ICommonFieldProps |
    IDropdownFieldProps |
    IAutocompleteProps |
    IMultiselectProps |
    IContactPicker |
    IPhonePicker) {
    this.init(data);
  }

  public init<T>(data: any) {
    if (data) {
      _.merge(this, data);
    }
  }
}
