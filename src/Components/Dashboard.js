import { Button, Card, CardContent } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "../styles/Dashboard.scss"

function Dashboard() {
    const listCategories = useSelector(state => state.product.listCategories)
    console.log('listCategories >>> ', listCategories)
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
        <div>
        <Card>
            <CardContent>
                Lista categorias
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                Lista Productos
            </CardContent>
        </Card>
        </div>
    </div>
  )
}

export default Dashboard