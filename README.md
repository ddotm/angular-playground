# NgPlayground

## Ag-grid
https://www.ag-grid.com/angular-getting-started/  

#### npm install
npm install --save ag-grid-community@latest ag-grid-angular@latest -E  
npm install

#### In module
```
import {AgGridModule} from 'ag-grid-angular';

@NgModule({
imports: [
    AgGridModule.withComponents([])
]
})
```

#### In styles.scss
```scss
@import "~ag-grid-community/dist/styles/ag-grid.css";
@import "~ag-grid-community/dist/styles/ag-theme-balham.css";
//@import "~ag-grid-community/dist/styles/ag-theme-balham-dark.css";
//@import "~ag-grid-community/dist/styles/ag-theme-blue.css";
//@import "~ag-grid-community/dist/styles/ag-theme-dark.css";
//@import "~ag-grid-community/dist/styles/ag-theme-fresh.css";
//@import "~ag-grid-community/dist/styles/ag-theme-bootstrap.css";
//@import "~ag-grid-community/dist/styles/ag-theme-material.css";
```
##### Changing the theme
Uncomment the desired theme.  
Change the class to match the theme name 
`<ag-grid-angular class="ag-theme-balham"`
to
`<ag-grid-angular class="ag-theme-balham-dark"`

### ENTERPRISE
npm install --save ag-grid-enterprise@latest -E 

Add `import 'ag-grid-enterprise';` to the module with `import {AgGridModule} from 'ag-grid-angular';`

##### Incorporating Enterprise license
In the module that imports AgGridModule and 'ag-grid-enterprise', add:
```angular2
import {LicenseManager} from 'ag-grid-enterprise';

constructor() {
LicenseManager.setLicenseKey('[ENTERPRISE_KEY]');
}
```
