open ReasonReact;

open RnPaper;

type action =
  | Back;

type state = {.};

let component = reducerComponent("Header");

let make = (_children) => {
  ...component,
  reducer: (action, _state) =>
    switch (action) {
    | Back => SideEffects((_self) => Js.log("Back, please!"))
    },
  render: (self) =>
    <Toolbar>
      <ToolbarBackAction onPress={() => self.send(Back)} />
      <ToolbarContent title="Reason Events" />
    </Toolbar>
};

let fromJs = (props) => make(props##children);

let default = wrapReasonForJs(~component, fromJs);
