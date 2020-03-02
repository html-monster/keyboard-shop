import React, { FC } from 'react'
import styled from 'styled-components'

import Item from './Item'

import { Product } from './types'

const ItemsListStyles = styled.div`
  display: flex;
  max-width: 960px;
  margin: 0 auto;
`

type Props = {
  products?: Product[]
}

const ProductsContainer: FC<Props> = ({ products = [] }) => {
  return (
    <ItemsListStyles>
      {products.map(({ node }) => (
        <Item product={node} key={node.id} />
      ))}
    </ItemsListStyles>
  )
}

export default ProductsContainer
