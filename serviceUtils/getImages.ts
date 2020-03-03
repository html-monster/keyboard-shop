import { Images, Image } from '../graphql/types'

const getImages = ({ edges = [] }: Images): Image[] => {
  return edges.map(({ node = {} }) => ({
    transformedSrc: node.transformedSrc,
  }))
}

export default getImages
