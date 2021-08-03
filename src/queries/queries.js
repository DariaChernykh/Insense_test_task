import {gql} from "apollo-boost";

export const GET_USER = gql`
  query {
    user(id: 1) {
      username
      name
      email
      phone
      website
      company {
        name
      }
      address {
        city
      }
    }
  }
`;


export const GET_ALL_ALBUMS = gql`
  query (
    $options: PageQueryOptions
  ) {
    albums(options: $options) {
      data {
        id
        title
        photos {
          data {
            id
            thumbnailUrl
            url
            title
          }
        }
        user{
          username
        }
      }
    }
  }
`;

export const DELETE_ALBUM = gql`
  mutation (
    $id: ID!
  ) {
    deleteAlbum(id: $id)
  }
`;

export const GET_POSTS = gql`
  query (
    $options: PageQueryOptions
  ) {
    posts(options: $options) {
      data {
        id
        title
        body
        user {
          username
        }
      }
      meta {
        totalCount
      }
    }
  }
`;
