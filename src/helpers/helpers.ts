import { ApolloError } from '@apollo/client/errors';
import { transformLocalizedStringToLocalizedField } from '@commercetools-frontend/l10n';

export const getErrorMessage = (error: ApolloError) =>
  error.graphQLErrors?.map((e) => e.message).join('\n') || error.message;

export const extractErrorFromGraphQlResponse = (graphQlResponse: any) => {
  if (graphQlResponse.networkError?.result?.errors?.length > 0) {
    return graphQlResponse.networkError.result.errors;
  }

  if (graphQlResponse.graphQLErrors?.length > 0) {
    return graphQlResponse.graphQLErrors;
  }

  return graphQlResponse;
};

const getNameFromPayload = (payload: any) => ({
  name: transformLocalizedStringToLocalizedField(payload.name),
});

const convertAction = (actionName: string, actionPayload: any) => ({
  [actionName]: actionName === 'changeName' ? getNameFromPayload(actionPayload) : actionPayload,
});

export const createGraphQlUpdateActions = (actions: any[]) =>
  actions.reduce(
    (previousActions, { action: actionName, ...actionPayload }) => [
      ...previousActions,
      convertAction(actionName, actionPayload),
    ],
    [],
  );
