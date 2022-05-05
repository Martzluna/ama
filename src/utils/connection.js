import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from './firebaseConfig'

export const createCategoryAction = async (values) => {
    return await addDoc(collection(db, 'categories'), {
        name: values.name,
        description: values.description,
        dateSave: Timestamp.now(),
    })
}