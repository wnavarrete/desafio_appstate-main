
import {createStore, combineReducers} from 'redux'
import { orderReducer } from './reducers'

const rootReducer = combineReducers({
    order: orderReducer
});

export default createStore(rootReducer);