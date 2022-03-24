const initState = {}
const CartReducer = (state = initState, action: any) => {
    switch (action) {
        case 'LOGGED_IN':
            return state = {
                ...state
            };
        default:
            return state;
    }
}

export default CartReducer;