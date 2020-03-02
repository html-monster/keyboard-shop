export type Data = {
  collectionByHandle: {
    id: number
    products: {
      edges: Product[]
    }
  }
}

export type Product = {
  node: {
    id: number
    title: string
    description?: string
    handle: string
    images?: {
      edges?: Image[]
    }
  }
}

type Image = {
  node?: {
    transformedSrc: string
  }
}
