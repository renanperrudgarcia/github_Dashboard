import { gql } from "@apollo/client";

const IssueQ = gql`
 
query Issue( $selectedUser: String!, $selectedRepository: String!) {
    repository(owner: $selectedUser, name:$selectedRepository) {
      id
      issues(first: 10) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
         title
          body
          url
          author{
            login
          }
          }
        }
      }
    }
`;
export default IssueQ;

