import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import Products from "./products";
import { mount,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Products",()=>{

    const store = createStore(reducers, applyMiddleware(thunk));
    const wrapper = mount(<Provider store={store}><Products/></Provider>);

    it("component should renders without crashing", () => {
        expect(wrapper.find(".col-lg-12").length).toEqual(1);
    });
});

