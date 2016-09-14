'use strict';

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

function getStuff() {
  var promise;
  return _regeneratorRuntime.async(function getStuff$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        promise = new _Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve('here the stuff');
          }, 2500);
        });
        context$1$0.next = 3;
        return promise;

      case 3:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

function displayStuff() {
  var stuff;
  return _regeneratorRuntime.async(function displayStuff$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.prev = 0;

        console.log('before...');
        context$1$0.next = 4;
        return getStuff();

      case 4:
        stuff = context$1$0.sent;

        console.log('after...');
        console.log(stuff);
        context$1$0.next = 12;
        break;

      case 9:
        context$1$0.prev = 9;
        context$1$0.t0 = context$1$0['catch'](0);

        console.log('error', context$1$0.t0);

      case 12:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[0, 9]]);
}

displayStuff();
