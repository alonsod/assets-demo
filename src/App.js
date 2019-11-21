import React from 'react'
import { Router } from '@reach/router'
import { NotRegisterUser } from './pages/NotRegisterUser'

export const App = () => {
  return (
    <Router>
      <NotRegisterUser path='/' />
      {
      /*
      <NotFound default />
      <Home path='/' />
      <Home path='/pet/:categoryId' />
      <Detail path='/detail/:detailId' />
      {!isAuth && <NotRegisterUser path='/login' />}
      {!isAuth && <Redirect from='/favs' to='/login' />}
      {!isAuth && <Redirect from='/user' to='/login' />}
      {isAuth && <Redirect from='login' to='/' />}
      <Favs path='/favs' />
      <User path='/user' />
      */
      }
    </Router>
  )
}
