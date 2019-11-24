import React from 'react'
import { LocationCard } from '../Location'
import { Flex } from '@chakra-ui/core'

export const ListOfLocations = () => {
  const photos = [
    {
      id: 1,
      descLocation: 'Almacen central',
      addresLocation: 'Horacio 23. Polanco. CDMX 09613',
      numAssets: '129'
    },
    {
      id: 2,
      descLocation: 'Oficinas Centrales',
      addresLocation: 'Universidad 2223. Del Valle. CDMX 03100',
      numAssets: '5, 529'
    },
    {
      id: 3,
      descLocation: 'Deportivo Norte',
      addresLocation: 'Felix Cuevas 555. Portales. CDMX 09613',
      numAssets: '2, 345'
    },
    {
      id: 4,
      descLocation: 'Nuevos Proyectos',
      addresLocation: 'Horacio 23. Polanco. CDMX 09613',
      numAssets: '2, 129'
    },
    {
      id: 5,
      descLocation: 'Lazaro Cardenas',
      addresLocation: 'Lazaro Cardenas 427. Polanco. CDMX 09613',
      numAssets: '4, 435'
    }
  ]

  return (
    <Flex flexDirection='row' flexWrap='wrap'>
      {
        photos.map(photo => <LocationCard key={photo.id} {...photo} />)
      }
    </Flex>
  )
}
