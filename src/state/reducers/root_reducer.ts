import  {combineReducers} from "redux";
import AuthReducer from "./auth_reducer";

const RootReducer = combineReducers({
    auth:AuthReducer
});

export default RootReducer;