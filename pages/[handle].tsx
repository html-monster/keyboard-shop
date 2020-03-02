import React from 'react'
import { useQuery } from 'react-apollo'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { getProduct } from '../graphql/query/product'

import SingleProduct from '../components/singleProduct/SingleProduct'

import { Data } from '../components/singleProduct/types'

const SingleProductPage = () => {
  const router = useRouter()
  const { handle } = router.query
  const { loading, error, data } = useQuery<Data>(getProduct, {
    variables: { handle },
  })

  if (error) {
    return <p>Error: {error.message}</p>
  }
  if (loading) {
    return <p>Loading...</p>
  }
  if (!data.productByHandle) {
    return <p>No Item Found for {handle}</p>
  }

  const { id, title, description, images } = data.productByHandle

  return (
    <>
      <Head>
        <title>Products | {title}</title>
      </Head>
      <SingleProduct
        id={id}
        title={title}
        description={description}
        images={images}
      />
    </>
  )
}

export default SingleProductPage
