import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import { SET_COMENT, SET_LIST_CATEGORY } from "../constants/product";


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
    console.log(getData)
    const list = []
    getData.forEach(item => list.push({...item.data(), id: item.id}))
    const commentsData = list.map(item => ({...item, dateSave: new Date(item.dateSave.toDate()).toISOString() }))
    dispatch({
        type: SET_COMENT,
        comments: commentsData 
    })
}