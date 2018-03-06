open ReasonReact;

open BsReactNative;

let styles =
  StyleSheet.create(
    Style.(
      {
        "container":
          style([
            flex(1.0),
            justifyContent(Center),
            alignItems(Center),
            backgroundColor("#F5FCFF")
          ])
      }
    )
  );

let component = statelessComponent("App");

let make = (_children) => {
  ...component,
  render: (_self) => <View style=styles##container> <Header /> <Home /> <Footer /> </View>
};
