[@bs.module "redux"] external combineReducers : 'a => 'b = "";

[@bs.module "redux"] external createStore : ('a, 'b) => 'c = "";

[@bs.module "redux"] external applyMiddleware : 'a => 'b = "";

let identity = (a) => a;

let rootReducer = combineReducers({"users": UserState.reducer, "events": EventState.reducer});

let store =
  createStore(
    rootReducer,
    applyMiddleware(StateMiddleware.handleActors(~actors=[|EventState.eventManagement|]))
  );
