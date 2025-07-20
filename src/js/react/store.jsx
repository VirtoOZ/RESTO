import { createStore } from "redux";
import reducer from "./reducers/reducer.jsx";

const store = createStore(reducer);

export default store;