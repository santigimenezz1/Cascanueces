import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout/Layout'
import Carrusel from '../components/Common/SectionHome/Carrusel/Carrusel'
import { routes } from './Route'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
       {
        routes.map(({id, path, Element})=>(
        <Route key={id} path={path} element={<Element />}  /> 
        ))

       }
      </Route>
    </Routes>
  )
}

export default AppRouter