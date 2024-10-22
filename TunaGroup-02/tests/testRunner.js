import { OnOpsInitEvent, OnOpsBeginCheck } from '../src/haloExtnApplication.js';

console.log("Running Test for OnOpsInitEvent:");
OnOpsInitEvent();

console.log("\nRunning Test for OnOpsBeginCheck:");
OnOpsBeginCheck();
