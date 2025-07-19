import { createStore } from "redux";
import reducer from "./reducers/index.jsx";
const store = createStore(reducer);

export default store;