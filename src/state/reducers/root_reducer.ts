import  {combineReducers} from "redux";
import AuthReducer from "./auth_reducer";
import SideBarReducer from "./side_bar_reducer";

const RootReducer = combineReducers({
    auth:AuthReducer,
    sidebar: SideBarReducer
});

export default RootReducer;