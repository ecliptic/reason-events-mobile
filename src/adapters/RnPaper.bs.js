// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_null_undefined = require("bs-platform/lib/js/js_null_undefined.js");
var ReactNativePaper = require("react-native-paper");

function make(children) {
  return ReasonReact.wrapJsForReason(ReactNativePaper.Provider, { }, children);
}

var Provider = /* module */[/* make */make];

function make$1(dark, statusBarHeight, theme, style, children) {
  return ReasonReact.wrapJsForReason(ReactNativePaper.Toolbar, {
              dark: Js_null_undefined.fromOption(dark),
              statusBarHeight: Js_null_undefined.fromOption(statusBarHeight),
              theme: Js_null_undefined.fromOption(theme),
              style: Js_null_undefined.fromOption(style)
            }, children);
}

var Toolbar = /* module */[/* make */make$1];

function make$2(icon, dark, size, onPress, style, children) {
  return ReasonReact.wrapJsForReason(ReactNativePaper.ToolbarAction, {
              icon: icon,
              dark: Js_null_undefined.fromOption(dark),
              size: Js_null_undefined.fromOption(size),
              onPress: Js_null_undefined.fromOption(onPress),
              style: Js_null_undefined.fromOption(style)
            }, children);
}

var ToolbarAction = /* module */[/* make */make$2];

function make$3(dark, onPress, style, children) {
  return ReasonReact.wrapJsForReason(ReactNativePaper.ToolbarBackAction, {
              dark: Js_null_undefined.fromOption(dark),
              onPress: Js_null_undefined.fromOption(onPress),
              style: Js_null_undefined.fromOption(style)
            }, children);
}

var ToolbarBackAction = /* module */[/* make */make$3];

function make$4(title, titleStyle, dark, subtitle, subtitleStyle, style, children) {
  return ReasonReact.wrapJsForReason(ReactNativePaper.ToolbarContent, {
              title: title,
              dark: Js_null_undefined.fromOption(dark),
              titleStyle: Js_null_undefined.fromOption(titleStyle),
              subtitle: Js_null_undefined.fromOption(subtitle),
              subtitleStyle: Js_null_undefined.fromOption(subtitleStyle),
              style: Js_null_undefined.fromOption(style)
            }, children);
}

var ToolbarContent = /* module */[/* make */make$4];

var fromOption = Js_null_undefined.fromOption;

exports.fromOption = fromOption;
exports.Provider = Provider;
exports.Toolbar = Toolbar;
exports.ToolbarAction = ToolbarAction;
exports.ToolbarBackAction = ToolbarBackAction;
exports.ToolbarContent = ToolbarContent;
/* ReasonReact Not a pure module */
