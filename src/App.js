import React from 'react'
// import { Router } from '@reach/router'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { ThemeProvider, CSSReset, Flex, Box } from '@chakra-ui/core'

export const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Flex w='100%' justifyContent='center' bg='tomato'>
        <Box w='sm' bg='azure'>
          <NotRegisterUser />
        </Box>
      </Flex>
      {
        /*
        <Router>
          <NotRegisterUser path='/' />

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

        </Router>
      */
      }

    </ThemeProvider>
  )
}
