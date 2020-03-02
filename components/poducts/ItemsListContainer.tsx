import React, { FC } from 'react'
import { useQuery } from 'react-apollo'

import { getAllProducts } from '../../graphql/query/product'

import Products from './ItemsList'

import { Data } from './types'

const ItemsListContainer: FC = () => {
  const { loading, error, data } = useQuery<Data>(getAllProducts)
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error: {error.message}</p>
  }

  const products = data?.collectionByHandle?.products?.edges

  return <Products products={products} />
}

export default ItemsListContainer
