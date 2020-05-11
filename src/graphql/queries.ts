import gql from "graphql-tag"

export const HelloQuery = gql`
  query Hello {
    hello
  }
`

export const HeyQuery = gql`
  query Hey {
    hey
  }
`
