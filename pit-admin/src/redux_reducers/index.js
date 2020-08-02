import { combineReducers } from "redux";
import userDataReducer from "./userData";
import ScheduleReducer from "./scheduleData";

const combinedReducers = combineReducers({
    userData: userDataReducer,
    scheduleData: ScheduleReducer
})
export default combinedReducers