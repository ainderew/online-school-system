const ScheduleReducer = (state=[],action) =>{
    const scheduleObjet = {
        [action.day]: action.data
    }
    switch (action.type){
        case "storeSchedule":
            // state =[...state, action.data]
            state =[...state, scheduleObjet]
            return state;
        default:
            return state;
    }
}

export default ScheduleReducer;