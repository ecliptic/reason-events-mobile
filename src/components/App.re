open ReasonReact;

open BsReactNative;

open RnPaper;

let component = statelessComponent("App");

let make = (_children) => {
  ...component,
  render: (_self) =>
    <Provider>
      <StatusBar barStyle=`lightContent />
      <View> <Header /> <Home /> <Footer /> </View>
    </Provider>
};

let fromJs = (props) => make(props##children);

let default = wrapReasonForJs(~component, fromJs);
