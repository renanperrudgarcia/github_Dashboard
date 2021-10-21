import { gql } from "@apollo/client";

const RepositoryQ = gql`
 
query Repository($selectedUser: String!) {
    user(login: $selectedUser) {
      id
      repositories(first: 10) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          name
          stargazerCount
          forkCount
         primaryLanguage {
           name
         }
          }
        }
      }
    }
`;
export default RepositoryQ;

