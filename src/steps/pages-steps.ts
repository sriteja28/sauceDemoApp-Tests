import {Given, Then} from "@wdio/cucumber-framework";
import openUrl from "../support/action/openUrl";
import getSelector from "../support/lib/getSelector";
import setInputValue from "../support/action/setInputValue";
import clickElement from "../support/action/clickElement";
import pauseExecution from "../support/action/pauseExecution";

Given(/^user navigate to the website "(.*)"$/, async (targetwebsite: string) => {
    await openUrl(targetwebsite);
})

Given(/^user enters "(.*)" into the input field "(.*)"$/, async (elementValue: string, pageElement: string) => {
    const selector = getSelector(pageElement);
    await setInputValue(elementValue, selector);
})

Given(/^user will click the "(.*)"$/, async (pageElement: string) => {
    const selector = getSelector(pageElement);
    await clickElement(selector)
})

Then(/^user pause for "(.*)" ms$/, async (pausetimeInMS: string) => {
    await pauseExecution(parseInt(pausetimeInMS));
})