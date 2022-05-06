import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import { SET_LIST_CATEGORY, SET_LIST_PRODUCTS, SET_COMENT, ADD_PRODUCTS, SET_DETAIL_PRODUCT} from "../constants/product";


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

export const getDetailProduct = (id) => async (dispatch)  => {
    const docRef = doc(db, "products", id);
    const productsRef = collection(db, "products");
    const dataDocument = await getDoc(docRef); // get data from firebase
    const data = dataDocument.data(); // get data from firebase
    const idCategoryProduct = data.category; // get id category
    const docRefCategory = doc(db, "categories", idCategoryProduct);
    const categoryName = await getDoc(docRefCategory)
    const queryProductsByCategory = query(productsRef, where("category", "==", idCategoryProduct));
    const productsFormatted = []
    const productsByCategory = await getDocs(queryProductsByCategory);
    productsByCategory.forEach(item => productsFormatted.push({...item.data(), id: item.id, dateSave: "" }))
    const formattedData = {
        ...data, 
        id: dataDocument.id, 
        dateSave: new Date(data.dateSave.toDate()).toISOString(),
        category: categoryName.data().name,
        productsByCategory: productsFormatted
    }
    
    dispatch({
        type: SET_DETAIL_PRODUCT,
        detailsProduct: formattedData
    })
}

export const listProductFilter = ({search, category}) => async (dispatch, getState)  => {
    console.log('search, category >>> ', search, category)
    const productsRef = collection(db, "products");
    const queryProducts = query(productsRef, where("name", "==", search) && true);
    const products = await getDocs(queryProducts);
    const productsFormatted = []
    products.forEach(item => productsFormatted.push({...item.data(), id: item.id, dateSave: "" }))
    console.log('productsFormatted >>> ', productsFormatted)
    dispatch({
        type: SET_LIST_PRODUCTS,
        list: productsFormatted
    })
}