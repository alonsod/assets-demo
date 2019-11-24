import React from 'react'
import { UserForm } from '../components/UserForm'

export const NotRegisterUser = () => {
  const onSubmit = ({ email, password }) => {

  }

  return (

    <UserForm
      onSubmit={onSubmit} title='Iniciar Sesión'
    />

  )
}
