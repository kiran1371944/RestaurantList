import{createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";

import {restaurantListReducer} from './reducers/restaurantReducer'

const reducer = combineReducers({
    restaurantReducer : restaurantListReducer
})
const middleware = [thunk]
const store = createStore(reducer,applyMiddleware(...middleware))

export default store 