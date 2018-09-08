import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import { BrowserRouter, Route } from "react-router-dom";

it("renders header component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render( <BrowserRouter>
                            <Route path="/" component={Header} />
                    </BrowserRouter>, div);
});
