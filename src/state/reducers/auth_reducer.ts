const initState = {}
const AuthReducer = (state = initState, action: any) => {
    switch (action) {
        case 'LOGGED_IN':
            return state = {
                ...state
            };
        default:
            return state;
    }
}

export default AuthReducer;