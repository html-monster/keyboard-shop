import { DataCollection, Product } from '../graphql/types'

const getProducts = (data: DataCollection): Product[] => {
  const edges = data?.collectionByHandle?.products?.edges

  if (edges) {
    return edges.map(
      ({ node: { id, handle, title, description, images } = {} }) => ({
        id,
        handle,
        title,
        description,
        images,
      })
    )
  }

  return []
}

export default getProducts
