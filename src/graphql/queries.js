import gql from 'graphql-tag';

export const GET_ALL_MATCHES = gql`
  query MyQuery {
    matches {
      id
      p1 {
        name
      }
      p2 {
        name
      }
      setts {
        p1_score
        p2_score
      }
    }
  }
`;
