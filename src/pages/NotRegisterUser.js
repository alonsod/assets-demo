import React from 'react'
import { UserForm } from '../components/UserForm'
import { navigate } from '@reach/router'
import { Box } from '@chakra-ui/core'
export const NotRegisterUser = () => {
  console.log('login!')

  const onSubmit = ({ email, password }) => {
    console.log('login!--')
    navigate('/locations')
  }

  return (
    <Box w='lg' bg='tomato'>
      <UserForm
        disabled={false}
        onSubmit={onSubmit} title='Iniciar Sesión'
      />
    </Box>
  )
}
