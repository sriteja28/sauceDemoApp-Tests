import {Given} from "@wdio/cucumber-framework";

Given(/^I print some info$/, async ()=>{
    console.log(`This is sample`)
})