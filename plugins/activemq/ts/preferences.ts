/// <reference path="../../includes.ts"/>
/// <reference path="activemqHelpers.ts"/>
/// <reference path="activemqPlugin.ts"/>

/**
 * @module ActiveMQ
 */
module ActiveMQ {
  _module.controller("ActiveMQ.PreferencesController", ["$scope", "localStorage", "userDetails", "$rootScope", ($scope, localStorage, userDetails, $rootScope) => {

    Core.initPreferenceScope($scope, localStorage, {
        'activemqUserName': {
          'value': userDetails.username,
        },
        'activemqPassword': {
          'value': userDetails.password
        },
        'activemqBrowseBytesMessages': {
          'value': 1,
          'converter': parseInt,
          'formatter': (value) => { return "" + value }
        },
        'activemqFilterAdvisoryTopics': {
          'value': false,
          'converter': Core.parseBooleanValue,
          'post': (newValue) => {
            $rootScope.$broadcast('jmxTreeUpdated');
          }
        }
      });

  }]);
}