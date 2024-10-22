import { _opsContext } from '../mocks/simphonyContext.js';
import { _dataStore } from '../mocks/simphonyDataStore.js';
import { _logger } from '../mocks/logger.js';



// Event subscription simulation
export function OnOpsInitEvent() {
    _opsContext.ShowMessage("Enter Tuna.TenderHalo.OnOpsInitEvent");
    _logger.Log("Initialized the application");
}

export function OnOpsBeginCheck() {
    _opsContext.ShowMessage("Enter Tuna.TenderHalo.opsBeginCheck");

    let dbEmployee = _dataStore.ReadEmployeeByIdNumber(_opsContext.TransEmployeeID);
    
    if (dbEmployee) {
        _opsContext.ShowMessage(`EmployeeID: ${dbEmployee.IdNumber}, EmplCheckName: ${dbEmployee.CheckName}`);
        let dbEmpClass = _dataStore.ReadEmployeeClassByID(dbEmployee.EmpClassID);
        
        if (dbEmpClass) {
            _opsContext.ShowMessage(`Employee ClassName: ${dbEmpClass.GetName()}, EmplClassObjNum: ${dbEmpClass.GetObjectNumber()}`);
        }
    }
}

