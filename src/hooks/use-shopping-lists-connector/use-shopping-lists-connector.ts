import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import {
  useFetchShoppingListDetailsQuery,
  useFetchShoppingListsQuery,
  useUpdateShoppingListMutation,
} from '../../graphql/generated/graphql';
import { createGraphQlUpdateActions, extractErrorFromGraphQlResponse } from '../../helpers';
import { FetcherWithPagination } from '../../types';
import { docToFormValues } from '../../views/shopping-lists/helpers/conversions';
import { getShoppingListActions } from './actions';

export const useShoppingListsFetcher = ({ page, perPage, tableSorting }: FetcherWithPagination) => {
  const { data, ...rest } = useFetchShoppingListsQuery({
    variables: {
      limit: perPage.value,
      offset: (page.value - 1) * perPage.value,
      sort: [`${tableSorting.value.key} ${tableSorting.value.order}`],
    },
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
  });

  return {
    paginatedResult: data?.shoppingLists,
    ...rest,
  };
};

export const useShoppingListDetailsFetcher = (shoppingListId: string) => {
  const { data, ...rest } = useFetchShoppingListDetailsQuery({
    variables: {
      id: shoppingListId,
    },
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
  });

  return {
    shoppingList: data?.shoppingList,
    ...rest,
  };
};

export const useShoppingListDetailsUpdater = () => {
  const [updateShoppingListDetails, result] = useUpdateShoppingListMutation();

  const execute = async ({
    original,
    nextDraft,
  }: {
    original: NonNullable<ReturnType<typeof useShoppingListDetailsFetcher>['shoppingList']>;
    nextDraft: any;
  }) => {
    const originalDraft = docToFormValues(original);

    const actions = getShoppingListActions(originalDraft, nextDraft);

    try {
      return await updateShoppingListDetails({
        context: {
          target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
        },
        variables: {
          id: original.id,
          version: original.version,
          actions: createGraphQlUpdateActions(actions),
        },
      });
    } catch (graphqlResponse) {
      throw extractErrorFromGraphQlResponse(graphqlResponse);
    }
  };

  return { execute, ...result };
};
