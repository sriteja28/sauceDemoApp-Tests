# sauceDemoApp-Tests
This repo is to demo few features of Sauce Demo App using WebdriverIO + Cucumber framework and run the repo in GitHub Actions.

![repo status badge ref](https://github.com/alekyasdet/sauceDemoApp-Tests/actions/workflows/testRun.yml/badge.svg)


Setup:

1. npm init wdio .
Installing packages using npm:
- @wdio/local-runner@latest
- @wdio/cucumber-framework@latest
- @wdio/spec-reporter@latest
- @wdio/allure-reporter@latest
- wdio-wait-for
- @testing-library/webdriverio
- ts-node
- typescript

To run your tests, execute:
$ cd /Users/Alekya/Documents/DemoAppTestsRepo/sauceDemoApp-Tests
$ npm run wdio

2. add all the configurations required in wdio.cf.ts
3. add all dependencies in the package.json file
4. run "npm install" to update the dependent packages
5. create the folder structure as per the framework
6. 