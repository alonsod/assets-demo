import React from 'react'
import { Link } from '@reach/router'
import { Box, Image } from '@chakra-ui/core'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const LocationCard = ({ id, descLocation, addresLocation, numAssets, src = DEFAULT_IMAGE }) => {
  return (
    <Box p={2}>
      {
        <Box w='320px' borderWidth='1px' rounded='lg' overflow='hidden'>
          <Link to={`/location/${id}`}>
            <Image src={src} h='150px' w='320px' objectFit='cover' />
            <Box p='3'>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
              >
                {descLocation}
              </Box>
              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                isTruncated
              >
                {addresLocation}
              </Box>
              <Box>
                {numAssets} Activos
              </Box>
            </Box>
          </Link>
        </Box>
      }
    </Box>
  )
}
