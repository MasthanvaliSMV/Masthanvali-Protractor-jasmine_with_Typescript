import { Config } from 'protractor';
export let config: Config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  noGlobals: true,
  multiCapabilities: [
    { 'browserName': 'firefox' },
  ],
  specs: ['./specs/**/*.js'],
};