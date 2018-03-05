// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Js_option = require("bs-platform/lib/js/js_option.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

function getEnvVar(key, fallback) {
  return Js_option.getWithDefault(fallback, Js_primitive.undefined_to_opt((process.env)[key]));
}

var isDev = +(getEnvVar("NODE_ENV", "production") === "development");

var isBrowser = +(typeof window !== "undefined");

var Env = /* module */[
  /* isDev */isDev,
  /* isBrowser */isBrowser
];

var endpoint = getEnvVar("GATSBY_API_ENDPOINT", "http://localhost:4000/graphql");

var Api = /* module */[/* endpoint */endpoint];

exports.getEnvVar = getEnvVar;
exports.Env = Env;
exports.Api = Api;
/* isDev Not a pure module */
