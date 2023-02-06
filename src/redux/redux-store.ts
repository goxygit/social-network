import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";  
import ProfilePageReducer from './reducer/profilePageReducer'
import DialogsReducer from './reducer/dialogsReducer'
import usersReducer from "./reducer/usersReducer";
import authReducer from "./reducer/authReducer";
import thunkMiddleware from 'redux-thunk'
import appReducer from "./reducer/appReducer";

let reducers = combineReducers({
        ProfilePage: ProfilePageReducer,
        DialogsPage: DialogsReducer,
        user: usersReducer,
        auth: authReducer,
        app:appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
 
type RootReducersType = typeof reducers
export type AppReducers = ReturnType<RootReducersType>
export default store