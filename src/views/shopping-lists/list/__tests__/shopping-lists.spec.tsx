import {
  fireEvent,
  mapResourceAccessToAppliedPermissions,
  screen,
} from '@commercetools-frontend/application-shell/test-utils';
import { buildGraphqlList } from '@commercetools-test-data/core';
import { graphql } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { entryPointUriPath, PERMISSIONS } from '../../../../constants';
import ApplicationRoutes from '../../../../routes';
import { renderApplicationWithRedux } from '../../../../test-utils';
import * as ShoppingListMock from '../../../../test-utils/test-data/shopping-list';

const mockServer = setupServer();
afterEach(() => mockServer.resetHandlers());
beforeAll(() =>
  mockServer.listen({
    onUnhandledRequest: 'error',
  }),
);
afterAll(() => mockServer.close());

const renderApp = (options: any = {}) => {
  const route = options.route || `/my-project/${entryPointUriPath}/shopping-lists`;
  const { history } = renderApplicationWithRedux(<ApplicationRoutes />, {
    route,
    project: {
      allAppliedPermissions: mapResourceAccessToAppliedPermissions([PERMISSIONS.View]),
    },
    ...options,
  });
  return { history };
};

it('should render shopping lists and paginate to second page', async () => {
  mockServer.use(
    graphql.query('FetchShoppingLists', (req, res, ctx) => {
      // Simulate a server side pagination
      const { offset } = req.variables;
      const totalItems = 25;
      const itemsPerPage = offset === 0 ? 20 : 5;
      return res(
        ctx.data({
          shoppingLists: buildGraphqlList(
            Array.from({ length: itemsPerPage }).map((_, index) =>
              ShoppingListMock.random().key(
                `shopping-list-key-${offset === 0 ? index : 20 + index}`,
              ),
            ),
            {
              name: 'ShoppingList',
              total: totalItems,
            },
          ),
        }),
      );
    }),
  );
  renderApp();

  // First Page
  await screen.findByText('shopping-list-key-0');
  expect(screen.queryByText('shopping-list-key-22')).not.toBeInTheDocument();

  // Go to the second page
  fireEvent.click(screen.getByLabelText('Next page'));

  // Second Page
  await screen.findByText('shopping-list-key-22');
  expect(screen.queryByText('shopping-list-key-0')).not.toBeInTheDocument();
});
