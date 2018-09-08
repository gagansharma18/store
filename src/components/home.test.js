import React from "react";
import ReactDOM from "react-dom";
import Home from "./home";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";

it("renders home component without crashing", () => {
    const div = document.createElement("div");
    const store = createStore(reducers, applyMiddleware(thunk));
    ReactDOM.render( <Provider store={store}><Home/></Provider> , div);
});
