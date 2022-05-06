import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import { SET_LIST_CATEGORY, SET_LIST_PRODUCTS, SET_COMENT, ADD_PRODUCTS} from "../constants/product";


export const listCategoriesAction = () =>  async (dispatch)  => {
    const getData = await getDocs(collection(db, "categories"));
    const list = []
    getData.forEach(item => list.push({...item.data(), id: item.id}))
    const formatted = list.map(item => ({...item, dateSave: new Date(item.dateSave.toDate()).toISOString() }))
    dispatch({
        type: SET_LIST_CATEGORY,
        list: formatted 
    })
}

export const showComments = () =>  async (dispatch)  => {
    const getData = await getDocs(collection(db, "comments"));
    const list = []
    getData.forEach(item => list.push({...item.data(), id: item.id}))
    const commentsData = list.map(item => ({...item, dateSave: new Date(item.dateSave.toDate()).toISOString() }))
    dispatch({
        type: SET_COMENT,
        comments: commentsData 
    })
}

export const listProductsAction = () =>  async (dispatch)  => {
    const getData = await getDocs(collection(db, "products"));
    const list = []
    getData.forEach(item => list.push({...item.data(), id: item.id}))
    const formatted = list.map(item => ({...item, dateSave: new Date(item.dateSave.toDate()).toISOString() }))
    dispatch({
        type: SET_LIST_PRODUCTS,
        list: formatted
    })
}
export const addProduct = (id) =>  {
    return {
        type: ADD_PRODUCTS, 
        id
    }
}
