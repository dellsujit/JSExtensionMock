const simphonyContext = require('../mocks/simphonyContext');
const simphonyDataStore = require('../mocks/simphonyDataStore');
const logger = require('../mocks/logger');

const HaloExtnApplication = {
    initialize: function () {
        console.log("HaloExtnApplication initialized.");
    },

    onOpsTmedPreview: function (tmedArgs) {
        try {
            if (this.tenderHaloFlag(tmedArgs)) {
                const customHaloValue = parseFloat(this.tenderHaloValue(tmedArgs));
                if (parseFloat(tmedArgs.Total) <= customHaloValue) {
                    console.log("Transaction approved, under Halo limit.");
                    return this.continueProcessing();
                } else {
                    this.showError("ERC_001");
                    console.log("Transaction declined, over Halo limit.");
                    return this.abortProcessing();
                }
            } else {
                return this.continueProcessing();
            }
        } catch (ex) {
            logger.error("ERC_101: " + ex.message);
            return this.continueProcessing();
        }
    },

    tenderHaloValue: function (tmedArgs) {
        return simphonyDataStore.getExtensionValue("TENDER_MEDIA", "HALO_AMOUNT_FIELD", tmedArgs.TmedDetail.TendMedID);
    },

    tenderHaloFlag: function (tmedArgs) {
        return simphonyDataStore.getExtensionValue("TENDER_MEDIA", "HALO_ENABLE_FLAG", tmedArgs.TmedDetail.TendMedID) === "true";
    },

    showError: function (errorCode) {
        simphonyContext.showError(errorCode);
    },

    continueProcessing: function () {
        return simphonyContext.EventProcessingInstruction.CONTINUE;
    },

    abortProcessing: function () {
        return simphonyContext.EventProcessingInstruction.ABORT;
    }
};

module.exports = HaloExtnApplication;
