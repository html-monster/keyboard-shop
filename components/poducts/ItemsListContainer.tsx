import React, { FC } from 'react'
import { useQuery } from 'react-apollo'

import { getAllProducts } from '../../graphql/query/product'

import { getProducts } from '../../serviceUtils'

import Products from './ItemsList'

import { DataCollection } from '../../graphql/types'

const ItemsListContainer: FC = () => {
  const { loading, error, data } = useQuery<DataCollection>(getAllProducts)
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error: {error.message}</p>
  }

  const products = getProducts(data)

  return <Products products={products} />
}

export default ItemsListContainer
