import { SET_LIST_CATEGORY, SET_LIST_PRODUCTS, SET_COMENT, ADD_PRODUCTS, SET_DETAIL_PRODUCT } from "../constants/product"

const initialState = { 
    listCategories: [],
    listProducts: [],
    basket: 0,
    checkoutBasket: [],
    detailProduct: {}
}
const initialComent = { 
    commentList: [],
}

export  function productsReducer(state = initialState, action) {
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
        case ADD_PRODUCTS: {
            return {
                ...state,
                checkoutBasket: [
                    ...state.checkoutBasket,
                    action.id
                ]
            }
        }
        case SET_DETAIL_PRODUCT : {
            return {
                ...state,
                detailProduct: action.detailsProduct
            }
        }
        default:
            return state
    }
}
export function commentReducer(state = initialComent, action) {
    switch (action.type) {
        case SET_COMENT: {
            return {
                ...state,
                commentList: action.comments
            }
        }
        default:
            return state
    }
}



