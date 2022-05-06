import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import { createSyncChannels } from '@commercetools/sync-actions';
import { docToFormValues } from '../../components/channel-details/conversions';
import {
  useFetchChannelDetailsQuery,
  useFetchChannelsQuery,
  useUpdateChannelDetailsMutation,
} from '../../graphql/generated/graphql';
import { createGraphQlUpdateActions, extractErrorFromGraphQlResponse } from '../../helpers';

export const useChannelsFetcher = ({ page, perPage, tableSorting }) => {
  const { data, error, loading } = useFetchChannelsQuery({
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
    channelsPaginatedResult: data?.channels,
    error,
    loading,
  };
};

export const useChannelDetailsFetcher = (channelId) => {
  const { data, error, loading } = useFetchChannelDetailsQuery({
    variables: {
      channelId,
    },
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
  });

  return {
    channel: data?.channel,
    error,
    loading,
  };
};

export const useChannelDetailsUpdater = () => {
  const { projectLanguages } = useApplicationContext((context) => ({
    dataLocale: context.dataLocale,
    projectLanguages: context.project.languages,
  }));

  const [updateChannelDetails, { loading }] = useUpdateChannelDetailsMutation();

  const syncStores = createSyncChannels();
  const execute = async ({ original, nextDraft }) => {
    const originalDraft = docToFormValues(original, projectLanguages);
    const actions = syncStores.buildActions(nextDraft, originalDraft);
    try {
      return await updateChannelDetails({
        context: {
          target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
        },
        variables: {
          channelId: original.id,
          version: original.version,
          actions: createGraphQlUpdateActions(actions),
        },
      });
    } catch (graphQlResponse) {
      throw extractErrorFromGraphQlResponse(graphQlResponse);
    }
  };

  return {
    loading,
    execute,
  };
};
