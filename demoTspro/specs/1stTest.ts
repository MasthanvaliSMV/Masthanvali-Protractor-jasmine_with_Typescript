import { browser } from 'protractor'
import {FirstTest} from './../pages/1stTestPages'
import * as dataFromJSON from './../jsonData/firstJson.json'

describe('demo one', () => {
    it('1st test case ', () => {
        browser.ignoreSynchronization = true
        browser.get("https://www.facebook.com")
        browser.sleep(5000)
        console.log("Task complited");
        console.log("done");
        console.log("wow wow wow wow")

        // access page methods.
        FirstTest.firstMethod();

        // access json file.
        console.log((<any>dataFromJSON).consoleLog)
    })
   
})