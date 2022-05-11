import { SuspendedRoute } from '@commercetools-frontend/application-shell';
import { NO_VALUE_FALLBACK } from '@commercetools-frontend/constants';
import {
  formatLocalizedString,
  transformLocalizedFieldToLocalizedString,
} from '@commercetools-frontend/l10n';
import DataTable from '@commercetools-uikit/data-table';
import FlatButton from '@commercetools-uikit/flat-button';
import { useDataTableSortingState, usePaginationState } from '@commercetools-uikit/hooks';
import { BackIcon } from '@commercetools-uikit/icons';
import LoadingSpinner from '@commercetools-uikit/loading-spinner';
import { ContentNotification } from '@commercetools-uikit/notifications';
import { Pagination } from '@commercetools-uikit/pagination';
import PrimaryButton from '@commercetools-uikit/primary-button';
import Spacings from '@commercetools-uikit/spacings';
import Text from '@commercetools-uikit/text';
import React from 'react';
import { useIntl } from 'react-intl';
import { Link as RouterLink, Route, Switch } from 'react-router-dom';
import { getErrorMessage } from '../../../helpers';
import { useLocale } from '../../../hooks/use-locale';
import useRoutes from '../../../hooks/use-routes';
import { useShoppingListsFetcher } from '../../../hooks/use-shopping-lists-connector';
import * as ShoppingListMock from '../../../test-utils/test-data/channel';
import CreateShoppingList from '../create/create-shopping-list';
import ShoppingListDetails from '../details/shopping-list-details';
import messages from './messages';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'key', label: 'Key' },
  { key: 'version', label: 'Version' },
];

interface Props {
  linkToWelcome: string;
}

type ShoppingList = NonNullable<
  ReturnType<typeof useShoppingListsFetcher>['paginatedResult']
>['results'][number];

const itemRenderer = (
  item: ShoppingList,
  column: { key: string },
  dataLocale: string,
  projectLanguages: string[],
) => {
  switch (column.key) {
    case 'id':
      return item.id;
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
    case 'key':
      return item.key;
    default:
      // @ts-expect-error column.key might not be present in ShoppingList
      return item[column.key];
  }
};

const ShoppingLists = (props: Props) => {
  const mock = ShoppingListMock.random().key('teste');
  console.log({ mock: mock.buildGraphql() });

  const routes = useRoutes();
  const { page, perPage } = usePaginationState();
  const tableSorting = useDataTableSortingState({ key: 'key', order: 'asc' });
  const intl = useIntl();

  const { dataLocale, projectLanguages } = useLocale();

  const { paginatedResult, error, loading } = useShoppingListsFetcher({
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

      {loading && <LoadingSpinner />}

      {paginatedResult && (
        <Spacings.Stack scale="m">
          <div>
            <PrimaryButton onClick={routes.createShoppingList.go} label="Add Shopping List" />
          </div>
          <DataTable
            isCondensed
            columns={columns}
            rows={paginatedResult.results}
            itemRenderer={(item, column) =>
              itemRenderer(item, column, dataLocale, projectLanguages)
            }
            maxHeight={600}
            sortedBy={tableSorting.value.key}
            sortDirection={tableSorting.value.order}
            onSortChange={tableSorting.onChange}
            onRowClick={(row) => routes.shoppingListDetails.go({ id: row.id })}
          />
          <Pagination
            page={page.value}
            onPageChange={page.onChange}
            perPage={perPage.value}
            onPerPageChange={perPage.onChange}
            totalItems={paginatedResult.total}
          />
          <Switch>
            <Route path={routes.createShoppingList.path}>
              <CreateShoppingList
                onClose={routes.shoppingLists.go}
                onSuccess={routes.shoppingListDetails.go}
              />
            </Route>
            <SuspendedRoute path={routes.shoppingListDetails.path}>
              <ShoppingListDetails onClose={routes.shoppingLists.go} />
            </SuspendedRoute>
          </Switch>
        </Spacings.Stack>
      )}
    </Spacings.Stack>
  );
};

export default ShoppingLists;
