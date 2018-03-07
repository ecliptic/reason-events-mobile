open ReasonReact;

let fromOption = Js.Nullable.fromOption;

module Provider = {
  [@bs.module "react-native-paper"] external reactClass : reactClass = "Provider";
  let make = (children) => wrapJsForReason(~reactClass, ~props=Js.Obj.empty(), children);
};

module Toolbar = {
  [@bs.module "react-native-paper"] external toolbar : reactClass = "Toolbar";
  let make = (~dark=?, ~statusBarHeight=?, ~theme=?, ~style=?, children) =>
    wrapJsForReason(
      ~reactClass=toolbar,
      ~props={
        "dark": dark |> fromOption,
        "statusBarHeight": statusBarHeight |> fromOption,
        "theme": theme |> fromOption,
        "style": style |> fromOption
      },
      children
    );
};

module ToolbarAction = {
  [@bs.module "react-native-paper"] external reactClass : reactClass = "ToolbarAction";
  let make = (~icon, ~dark=?, ~size=?, ~onPress=?, ~style=?, children) =>
    wrapJsForReason(
      ~reactClass,
      ~props={
        "icon": icon,
        "dark": dark |> fromOption,
        "size": size |> fromOption,
        "onPress": onPress |> fromOption,
        "style": style |> fromOption
      },
      children
    );
};

module ToolbarBackAction = {
  [@bs.module "react-native-paper"] external reactClass : reactClass = "ToolbarBackAction";
  let make = (~dark=?, ~onPress=?, ~style=?, children) =>
    wrapJsForReason(
      ~reactClass,
      ~props={
        "dark": dark |> fromOption,
        "onPress": onPress |> fromOption,
        "style": style |> fromOption
      },
      children
    );
};

module ToolbarContent = {
  [@bs.module "react-native-paper"] external reactClass : reactClass = "ToolbarContent";
  let make = (~title, ~titleStyle=?, ~dark=?, ~subtitle=?, ~subtitleStyle=?, ~style=?, children) =>
    wrapJsForReason(
      ~reactClass,
      ~props={
        "title": title,
        "dark": dark |> fromOption,
        "titleStyle": titleStyle |> fromOption,
        "subtitle": subtitle |> fromOption,
        "subtitleStyle": subtitleStyle |> fromOption,
        "style": style |> fromOption
      },
      children
    );
};
