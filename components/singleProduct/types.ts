export type Data = {
  productByHandle: SingleProduct
}

export type SingleProduct = {
  id: number
  title: string
  description?: string
  images?: {
    edges?: Image[]
  }
}

type Image = {
  node?: {
    transformedSrc: string
  }
}
