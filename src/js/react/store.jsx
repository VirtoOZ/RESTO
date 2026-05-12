import { createStore } from "redux";
import reducer from "./reducers/reducer.jsx";

export const store = createStore(reducer);