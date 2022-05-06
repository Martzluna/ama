import { SET_LIST_CATEGORY, SET_LIST_PRODUCTS } from "../constants/product"

const initialState = { 
    listCategories: [],
    listProducts: [],
    basket: 0
}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LIST_CATEGORY: {
            return {
                ...state,
                listCategories: action.list
            }
        }
        case SET_LIST_PRODUCTS: {
            return {
                ...state,
                listProducts: action.list
            }
        }
        default:
            return state
    }
}