import React from 'react'
import { UserForm } from '../components/UserForm'
import { navigate } from '@reach/router'

export const NotRegisterUser = () => {
  console.log('login!')

  const onSubmit = ({ email, password }) => {
    console.log('login!--')
    navigate('/locations')
  }

  return (

    <UserForm
      disabled={false}
      onSubmit={onSubmit} title='Iniciar Sesión'
    />

  )
}
