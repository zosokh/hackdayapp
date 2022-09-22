/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHackday = /* GraphQL */ `
  mutation CreateHackday(
    $input: CreateHackdayInput!
    $condition: ModelHackdayConditionInput
  ) {
    createHackday(input: $input, condition: $condition) {
      id
      text
      slack_channel
      createdAt
      updatedAt
    }
  }
`;
export const updateHackday = /* GraphQL */ `
  mutation UpdateHackday(
    $input: UpdateHackdayInput!
    $condition: ModelHackdayConditionInput
  ) {
    updateHackday(input: $input, condition: $condition) {
      id
      text
      slack_channel
      createdAt
      updatedAt
    }
  }
`;
export const deleteHackday = /* GraphQL */ `
  mutation DeleteHackday(
    $input: DeleteHackdayInput!
    $condition: ModelHackdayConditionInput
  ) {
    deleteHackday(input: $input, condition: $condition) {
      id
      text
      slack_channel
      createdAt
      updatedAt
    }
  }
`;
