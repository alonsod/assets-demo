import React from 'react'
// import { Button } from './styles'
import { Button } from '@chakra-ui/core'
import PropTypes from 'prop-types'

export const SubmitButton = ({ children, disabled, onClick }) => {
  return (
    <Button type='submit' isDisabled={disabled} onClick={onClick}>
      {children}
    </Button>
  )
}

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onclick: PropTypes.func,
  children: PropTypes.node.isRequired
}
