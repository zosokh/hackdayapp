/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHackday = /* GraphQL */ `
  query GetHackday($id: ID!) {
    getHackday(id: $id) {
      id
      text
      slack_channel
      createdAt
      updatedAt
    }
  }
`;
export const listHackdays = /* GraphQL */ `
  query ListHackdays(
    $filter: ModelHackdayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHackdays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        slack_channel
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
