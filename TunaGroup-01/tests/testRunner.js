const HaloExtnApplication = require('../src/haloExtnApplication');
const simphonyContext = require('../mocks/simphonyContext');
const testData = require('./testData');

// Initialize the application
HaloExtnApplication.initialize();

// Simulate registering the event and triggering it with test data
const eventHandler = simphonyContext.registerEventHandler("OpsTmedPreviewEvent", HaloExtnApplication.onOpsTmedPreview.bind(HaloExtnApplication));
eventHandler(testData.testArgs);
