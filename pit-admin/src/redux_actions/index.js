export const userDataAction = (userData) =>{
    return{
        type: "storeUserData",
        userData: userData
    }
}
export const clearDataAction = () =>{
    return{
        type: "clearUserData"
    }
}
export const ScheduleDataAction = (scheduleData, day) =>{
    return{
        type: "storeSchedule",
        data: scheduleData,
        day: day
    }
}