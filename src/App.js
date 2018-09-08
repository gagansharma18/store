import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Home from "./components/home";
import reducers from "./reducers";
const store = createStore(reducers, applyMiddleware(thunk));
            <Provider store={store}>
            </Provider>
