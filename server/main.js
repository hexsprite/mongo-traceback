import { Meteor } from "meteor/meteor";
import { onPageLoad } from "meteor/server-render";

Meteor.startup(() => {
  // Code to run on server startup.
  console.log(`Greetings from ${module.id}!`);
});

onPageLoad(sink => {
  // Code to run on every request.
  sink.renderIntoElementById(
    "server-render-target",
    `Server time: ${new Date}`
  );
});

import { Mongo } from 'meteor/mongo'

const testData = new Mongo.Collection('testData')

Meteor.startup(() => {
  testData.insert({test: '1'})
  testData.update({test: '1'}, {$set: {}})
})

