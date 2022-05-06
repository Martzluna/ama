import { DeleteForever } from '@mui/icons-material'
import { Button, Card, CardContent, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listCategoriesAction } from '../Redux/actions/product'
import "../styles/Dashboard.scss"
import { db } from '../utils/firebaseConfig'

function Dashboard() {
    const dispatch = useDispatch()
    const listCategories = useSelector(state => state.product.listCategories)
    const deleteCategory = async (id) => {
        const deleteRef = doc(db, 'categories', id)
        await deleteDoc(deleteRef)
        dispatch(listCategoriesAction())
    }
    return (
        <div className='content'>
            <div className='contentButton'>
                <Button variant='contained' LinkComponent={Link} to="/create-category">
                    Crear Categoria
                </Button>
                <Button variant='contained' LinkComponent={Link} to="/create-product">
                    Crear Producto
                </Button>
            </div>
            <div className='contentCards'>
                <Card>
                    <CardContent>
                        <List>
                            {listCategories.map(category => (
                                <ListItem
                                    key={category.id}
                                    disableGutters
                                    secondaryAction={
                                        <IconButton aria-label="delete" onClick={() => deleteCategory(category.id)}>
                                            <DeleteForever />
                                        </IconButton>
                                    }
                                >
                                    <ListItemText primary={category.name} />
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        Lista Productos jasdjkaslkjas jkasdjsaljkda
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Dashboard