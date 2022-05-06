import { DeleteForever } from '@mui/icons-material'
import { Button, Card, CardContent, CardHeader, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import { deleteDoc, doc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listCategoriesAction, listProductsAction } from '../Redux/actions/product'
import "../styles/Dashboard.scss"
import { db } from '../utils/firebaseConfig'

function Dashboard() {
    const dispatch = useDispatch()
    const listCategories = useSelector(state => state.product.listCategories)
    const listProducts = useSelector(state => state.product.listProducts)
    const checkoutBasket = useSelector(state => state.product.checkoutBasket)
    console.log(checkoutBasket)
    const deleteCategory = async (id) => {
        const deleteRef = doc(db, 'categories', id)
        await deleteDoc(deleteRef)
        dispatch(listCategoriesAction())
    }
    const deleteProduct = async (id) => {
        const deleteRef = doc(db, 'products', id)
        await deleteDoc(deleteRef)
        dispatch(listProductsAction())
    }
    useEffect(() => {
        dispatch(listCategoriesAction())
        dispatch(listProductsAction())
    }, [])
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
                    <CardHeader
                        title="Categorias"
                    />
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
                    <CardHeader title="Productos" />
                    <CardContent>
                        <List>
                            {listProducts.map(product => (
                                <ListItem
                                    key={product.id}
                                    disableGutters
                                    secondaryAction={
                                        <IconButton aria-label="delete" onClick={() => deleteProduct(product.id)}>
                                            <DeleteForever />
                                        </IconButton>
                                    }
                                >
                                    <ListItemText primary={product.name} />
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Dashboard