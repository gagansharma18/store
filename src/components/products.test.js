import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import Products from "./products";

it("renders products component without crashing", () => {
    const div = document.createElement("div");
    const store = createStore(reducers, applyMiddleware(thunk));
    ReactDOM.render( <Provider store={store}><Products/></Provider>, div);
});

