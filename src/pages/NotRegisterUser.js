import React, { Fragment } from 'react'
import { UserForm } from '../components/UserForm'

export const NotRegisterUser = () => {
  const onSubmit = ({ email, password }) => {

  }

  return (
    <Fragment key='kay'>
      <UserForm
        onSubmit={onSubmit} title='Iniciar Sesión'
      />
    </Fragment>
  )
}
