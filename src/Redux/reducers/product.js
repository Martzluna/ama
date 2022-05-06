import { SET_LIST_CATEGORY, SET_COMENT } from "../constants/product"

const initialState = { 
    listCategories: [],
    listProducts: [],
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


