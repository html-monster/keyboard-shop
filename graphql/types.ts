export interface DataCollection {
  collectionByHandle: {
    id: number
    products?: {
      edges?: ProductEdge[]
    }
  }
}
export interface DataSingle {
  productByHandle: Product
}

export interface ProductEdge {
  node?: Product
}

export interface Product {
  id: number
  title?: string
  description?: string
  handle?: string
  images?: Images
}

export interface Images {
  edges?: ImageEdge[]
}

export interface ImageEdge {
  node?: Image
}

export interface Image {
  transformedSrc: string
}
