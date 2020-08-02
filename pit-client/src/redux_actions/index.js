export const userDataAction = (userData) =>{
    return{
        type: "storeUserData",
        userData: userData
    }
}
export const clearDataAction = (userData) =>{
    return{
        type: "clearUserData"
    }
}