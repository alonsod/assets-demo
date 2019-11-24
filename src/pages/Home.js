import React from 'react'
// import { ListOfCategories } from '../components/ListOfCategories'
// import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'
/**
 * En la versión 14.1 de standard es necesario usar el componente
 * Fragment como React.Fragment
 *
 * Después se quito el Fragment por el Layout
 * @param {*} param0
 */

export const Home = () => {
  return (
    <Layout
      title='Ubicaciones'
      subtitle='Selecciona una ubicación para administrar sus activos'
    >
      {
        /*
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
      */
      }
    </Layout>
  )
}
/*
export const Home = React.memo(HomePage, (prevProps, props) => {
  // return prevProps.categoryId === props.categoryId
})
*/
