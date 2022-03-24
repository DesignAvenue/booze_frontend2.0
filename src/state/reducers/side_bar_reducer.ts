const initState = {
    sidebar:false
}
const SideBarReducer = (state = initState, action: any) => {
    switch (action) {
        case 'OPEN_SIDEBAR':
            return state = {
                ...state,
                sidebar: !state.sidebar
            };
        default:
            return state;
    }
}

export default SideBarReducer;