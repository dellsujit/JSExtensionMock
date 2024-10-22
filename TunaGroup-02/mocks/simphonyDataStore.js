// Mock of Simphony DataStore API
export const _dataStore = {
    ReadEmployeeByIdNumber: (id) => {
        return { 
            IdNumber: id, 
            CheckName: "John Doe", 
            ObjectNumber: 456, 
            EmpClassID: 789 
        };
    },
    ReadEmployeeClassByID: (classId) => {
        return { 
            GetName: () => "Manager", 
            GetObjectNumber: () => classId 
        };
    }
};
