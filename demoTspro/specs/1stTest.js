"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const _1stTestPages_1 = require("./../pages/1stTestPages");
const dataFromJSON = require("./../jsonData/firstJson.json");
describe('demo one', () => {
    it('1st test case ', () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get("https://www.facebook.com");
        protractor_1.browser.sleep(5000);
        console.log("Task complited");
        console.log("done");
        console.log("wow wow wow wow");
        // access page methods.
        _1stTestPages_1.FirstTest.firstMethod();
        // access json file.
        console.log(dataFromJSON.consoleLog);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMXN0VGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIjFzdFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBb0M7QUFDcEMsMkRBQWlEO0FBQ2pELDZEQUE0RDtBQUU1RCxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRTtJQUN0QixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO1FBQ3RCLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFBO1FBQ3BDLG9CQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUE7UUFDdkMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBRTlCLHVCQUF1QjtRQUN2Qix5QkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXhCLG9CQUFvQjtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFPLFlBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUMvQyxDQUFDLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQyxDQUFBIn0=