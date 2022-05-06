import { SuspendedRoute } from '@commercetools-frontend/application-shell';
import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';
import { NO_VALUE_FALLBACK } from '@commercetools-frontend/constants';
import {
  formatLocalizedString,
  transformLocalizedFieldToLocalizedString,
} from '@commercetools-frontend/l10n';
import Constraints from '@commercetools-uikit/constraints';
import DataTable from '@commercetools-uikit/data-table';
import FlatButton from '@commercetools-uikit/flat-button';
import { useDataTableSortingState, usePaginationState } from '@commercetools-uikit/hooks';
import { BackIcon } from '@commercetools-uikit/icons';
import LoadingSpinner from '@commercetools-uikit/loading-spinner';
import { ContentNotification } from '@commercetools-uikit/notifications';
import { Pagination } from '@commercetools-uikit/pagination';
import Spacings from '@commercetools-uikit/spacings';
import Text from '@commercetools-uikit/text';
import React, { lazy } from 'react';
import { useIntl } from 'react-intl';
import { Link as RouterLink, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { getErrorMessage } from '../../helpers';
import { useChannelsFetcher } from '../../hooks/use-channels-connector';
import useRoutes from '../../hooks/use-channels-connector/use-routes';
import messages from './messages';

const ChannelDetails = lazy(() => import('../channel-details'));

const columns = [
  { key: 'name', label: 'Channel name' },
  { key: 'key', label: 'Channel key', isSortable: true },
  { key: 'roles', label: 'Roles' },
];

const itemRenderer = (item, column, dataLocale, projectLanguages) => {
  switch (column.key) {
    case 'roles':
      return item.roles.join(', ');
    case 'name':
      return formatLocalizedString(
        { name: transformLocalizedFieldToLocalizedString(item.nameAllLocales) },
        {
          key: 'name',
          locale: dataLocale,
          fallbackOrder: projectLanguages,
          fallback: NO_VALUE_FALLBACK,
        },
      );
    default:
      return item[column.key];
  }
};

const Channels = (props) => {
  const routes = useRoutes();
  const intl = useIntl();
  const match = useRouteMatch();
  const { push } = useHistory();
  const { page, perPage } = usePaginationState();
  const tableSorting = useDataTableSortingState({ key: 'key', order: 'asc' });
  const { dataLocale, projectLanguages } = useApplicationContext((context) => ({
    dataLocale: context.dataLocale,
    projectLanguages: context.project.languages,
  }));
  const { channelsPaginatedResult, error, loading } = useChannelsFetcher({
    page,
    perPage,
    tableSorting,
  });

  if (error) {
    return (
      <ContentNotification type="error">
        <Text.Body>{getErrorMessage(error)}</Text.Body>
      </ContentNotification>
    );
  }

  return (
    <Spacings.Stack scale="xl">
      <Spacings.Stack scale="xs">
        <FlatButton
          as={RouterLink}
          to={props.linkToWelcome}
          label={intl.formatMessage(messages.backToWelcome)}
          icon={<BackIcon />}
        />
        <Text.Headline as="h2" intlMessage={messages.title} />
      </Spacings.Stack>

      <Constraints.Horizontal max={13}>
        <ContentNotification type="info">
          <Text.Body intlMessage={messages.demoHint} />
        </ContentNotification>
      </Constraints.Horizontal>

      {loading && <LoadingSpinner />}

      {channelsPaginatedResult ? (
        <Spacings.Stack scale="l">
          <DataTable
            isCondensed
            columns={columns}
            rows={channelsPaginatedResult.results}
            itemRenderer={(item, column) =>
              itemRenderer(item, column, dataLocale, projectLanguages)
            }
            maxHeight={600}
            sortedBy={tableSorting.value.key}
            sortDirection={tableSorting.value.order}
            onSortChange={tableSorting.onChange}
            onRowClick={(row) => push(`${match.url}/${row.id}`)}
          />
          <Pagination
            page={page.value}
            onPageChange={page.onChange}
            perPage={perPage.value}
            onPerPageChange={perPage.onChange}
            totalItems={channelsPaginatedResult.total}
          />
          <Switch>
            <SuspendedRoute path={routes.channelDetails.path}>
              <ChannelDetails onClose={routes.channelList.go} />
            </SuspendedRoute>
          </Switch>
        </Spacings.Stack>
      ) : null}
    </Spacings.Stack>
  );
};
Channels.displayName = 'Channels';

export default Channels;