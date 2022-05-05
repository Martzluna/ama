import { SET_LIST_CATEGORY } from "../constants/product"

const initialState = { 
    listCategories: [],
    listProducts: [],
}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LIST_CATEGORY: {
            return {
                ...state,
                listCategories: action.list
            }
        }
        default:
            return state
    }
}