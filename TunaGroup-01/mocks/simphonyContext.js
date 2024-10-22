module.exports = {
    EventProcessingInstruction: {
        CONTINUE: "Continue",
        ABORT: "Abort"
    },
    showError: function (errorCode) {
        console.log("Simphony Error Displayed: " + errorCode);
    },
    registerEventHandler: function (event, handler) {
        console.log(`Event '${event}' registered.`);
        return handler;
    }
};
