open ReasonReact;

open BsReactNative;

let styles = StyleSheet.create(Style.({"container": style([flex(1.0)])}));

let component = statelessComponent("Home");

let make = (_children) => {
  ...component,
  render: (_self) =>
    <View style=styles##container> <Text> (stringToElement("Reason Events")) </Text> </View>
};

let fromJs = (props) => make(props##children);

let default = wrapReasonForJs(~component, fromJs);
