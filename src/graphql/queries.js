import gql from 'graphql-tag';

export const GET_ALL_MATCHES = gql`
  query MyQuery {
    matches {
      p1 {
        name
      }
      p2 {
        name
      }
      id
    }
  }
`;
