import { combineReducers } from 'redux';
import userReducer from './user';

const rootReducer = combineReducers({
    // products: productsReducer,
    user: userReducer
});

export default rootReducer;