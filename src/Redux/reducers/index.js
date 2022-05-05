import { combineReducers } from 'redux';
import productsReducer from './product';
import userReducer from './user';

const rootReducer = combineReducers({
    product: productsReducer,
    user: userReducer
});

export default rootReducer;