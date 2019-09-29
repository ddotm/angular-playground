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
```

