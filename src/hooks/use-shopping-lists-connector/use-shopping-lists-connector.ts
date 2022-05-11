import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import {
  FetchShoppingListsDocument,
  ShoppingListDraft,
  useCreateShoppingListMutation,
  useDeleteShoppingListMutation,
  useFetchShoppingListDetailsQuery,
  useFetchShoppingListsQuery,
  useUpdateShoppingListMutation,
} from '../../graphql/generated/graphql';
import { createGraphQlUpdateActions, extractErrorFromGraphQlResponse } from '../../helpers';
import { FetcherWithPagination } from '../../types';
import { docToFormValues, formValuesToDoc } from '../../views/shopping-lists/helpers/conversions';
import { getShoppingListActions } from './actions';

type ShoppingList = NonNullable<ReturnType<typeof useShoppingListDetailsFetcher>['shoppingList']>;

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
    fetchPolicy: 'cache-and-network',
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

  const execute = async ({ original, nextDraft }: { original: ShoppingList; nextDraft: any }) => {
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

export const useShoppingListDeleter = () => {
  const [deleteShoppingList, result] = useDeleteShoppingListMutation();

  const execute = async (shoppingList: ShoppingList) => {
    try {
      return await deleteShoppingList({
        context: {
          target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
        },
        variables: {
          id: shoppingList.id,
          version: shoppingList.version,
        },
        update(cache) {
          const normalizedId = cache.identify({ id: shoppingList.id, __typename: 'ShoppingList' });
          cache.evict({ id: normalizedId });
          cache.gc();
        },
      });
    } catch (graphqlResponse) {
      throw extractErrorFromGraphQlResponse(graphqlResponse);
    }
  };

  return { execute, ...result };
};

export const useShoppingListCreator = () => {
  const [createShoppingList, result] = useCreateShoppingListMutation();

  const execute = async (draft: ShoppingListDraft) => {
    try {
      return await createShoppingList({
        context: {
          target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
        },
        variables: {
          draft: formValuesToDoc(draft),
        },
        refetchQueries: [FetchShoppingListsDocument],
      });
    } catch (graphqlResponse) {
      throw extractErrorFromGraphQlResponse(graphqlResponse);
    }
  };

  return { execute, ...result };
};
