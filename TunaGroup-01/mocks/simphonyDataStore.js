module.exports = {
    getExtensionValue: function (tableName, fieldName, id) {
        console.log(`Fetching extension data from ${tableName}.${fieldName} for ID: ${id}`);
        if (fieldName === "HALO_AMOUNT_FIELD") {
            return "100.00";  // Simulated Halo limit
        } else if (fieldName === "HALO_ENABLE_FLAG") {
            return "true";  // Simulated flag for Halo enabled
        }
        return "";
    }
};
