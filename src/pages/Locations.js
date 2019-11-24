import React from 'react'
import { ListOfLocations } from '../components/ListOfLocations'
import { Layout } from '../components/Layout'

export const Locations = () => {
  return (
    <Layout
      title='Ubicaciones'
      subtitle='Selecciona una ubicación para administrar sus activos'
    >
      {
        <ListOfLocations />
      }
    </Layout>
  )
}
