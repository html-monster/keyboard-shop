import React, { FC } from 'react'
import Head from 'next/head'

import ItemsListContainer from '../components/poducts/ItemsListContainer'

const Products: FC = () => (
  <>
    <Head>
      <title>Products</title>
    </Head>
    <ItemsListContainer />
  </>
)

export default Products
