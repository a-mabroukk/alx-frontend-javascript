// Import types from interface.ts
/// <reference path="./interface.ts" />


// Import everything from crud.js as CRUD
import * as CRUD from 'crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

const newRowID : RowID = CRUD.insertRow(row);

const updatedRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updatedRow); //updates the row with the new data//
CRUD.deleteRow(newRowID);
