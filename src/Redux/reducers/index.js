import { combineReducers } from 'redux';
import {productsReducer, commentReducer }from './product';
import userReducer from './user';

const rootReducer = combineReducers({
    product: productsReducer,
    user: userReducer,
    comment : commentReducer
});

export default rootReducer;