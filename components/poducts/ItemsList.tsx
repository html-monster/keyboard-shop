import React, { FC } from 'react'
import styled from 'styled-components'

import { getImages } from '../../serviceUtils'

import Item from './Item'

import { Product } from '../../graphql/types'

const ItemsListStyles = styled.div`
  display: flex;
  max-width: 960px;
  margin: 0 auto;
`

type Props = {
  products: Product[]
}

const ProductsContainer: FC<Props> = ({ products }) => {
  return (
    <ItemsListStyles>
      {products.map(({ id, handle, title, description, images }) => (
        <Item
          key={id}
          handle={handle}
          title={title}
          description={description}
          images={getImages(images)}
        />
      ))}
    </ItemsListStyles>
  )
}

export default ProductsContainer
