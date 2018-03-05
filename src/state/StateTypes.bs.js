// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var SetUser = Caml_exceptions.create("StateTypes.Users.SetUser");

var Users = /* module */[/* SetUser */SetUser];

var RefreshEvents = Caml_exceptions.create("StateTypes.Events.RefreshEvents");

var SetEvents = Caml_exceptions.create("StateTypes.Events.SetEvents");

var CreateEvent = Caml_exceptions.create("StateTypes.Events.CreateEvent");

var Events = /* module */[
  /* RefreshEvents */RefreshEvents,
  /* SetEvents */SetEvents,
  /* CreateEvent */CreateEvent
];

exports.Users = Users;
exports.Events = Events;
/* No side effect */