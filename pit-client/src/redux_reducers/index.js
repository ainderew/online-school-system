import { combineReducers } from "redux";
import userDataReducer from "./userData";

const combinedReducers = combineReducers({
    userData: userDataReducer
})
export default combinedReducers