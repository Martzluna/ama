import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, Route } from 'react-router-dom'

function RouteAuth({ props }) {
  const isAuth = useSelector(state => state.user.isAuth)
  return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default RouteAuth