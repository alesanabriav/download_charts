var countries = require('./countries.json');
var _ = require('lodash');

tests = {};
tests = countries.reduce(function(prev, current) {
  var newOb = {};
  newOb['download ' + current] = function(client) {
    
            client
            .url('http://religious-freedom-report.org/en/report/' + current.replace(' ', '-'))
            .waitForElementVisible('body', 10000)
            .click('.highcharts-button')
            .pause(3000)
            .click('.highcharts-menu-item:nth-child(6)')
            .pause(3000)
            .end();
  }

  return _.extend(prev, newOb);
}, {});

console.log(tests);
module.exports = tests;
 