const userDataReducer = (state={},action) =>{
    switch (action.type){
        case "storeUserData":
            state = action.userData;
            return state;
        case "clearUserData":
            state = {}
            return state;
        default:
            return state;
    }
    
}

export default userDataReducer;