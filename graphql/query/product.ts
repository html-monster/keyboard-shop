import { gql } from 'apollo-boost'

export const getAllProducts = gql`
  query {
    collectionByHandle(handle: "keyboards") {
      id
      products(first: 15) {
        edges {
          node {
            id
            title
            description
            handle
            images(first: 1) {
              edges {
                node {
                  transformedSrc(maxWidth: 300)
                }
              }
            }
          }
        }
      }
    }
  }
`

export const getProduct = gql`
  query($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      handle
      images(first: 1) {
        edges {
          node {
            transformedSrc(maxWidth: 600)
          }
        }
      }
    }
  }
`
