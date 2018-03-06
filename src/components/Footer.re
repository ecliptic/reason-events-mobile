open ReasonReact;

open BsReactNative;

let component = statelessComponent("Footer");

let make = (_children) => {
  ...component,
  render: (_self) =>
    <View />
};

let fromJs = (props) => make(props##children);

let default = wrapReasonForJs(~component, fromJs);
