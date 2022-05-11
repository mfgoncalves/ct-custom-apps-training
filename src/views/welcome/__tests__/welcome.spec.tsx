import React from 'react';
import {
  screen,
  mapResourceAccessToAppliedPermissions,
} from '@commercetools-frontend/application-shell/test-utils';
import { renderApplicationWithRedux } from '../../../test-utils';
import { entryPointUriPath, PERMISSIONS } from '../../../constants/constants';
import ApplicationRoutes from '../../../routes';

const renderApp = (options: any = {}) => {
  const route = options.route || `/my-project/${entryPointUriPath}`;
  const { history } = renderApplicationWithRedux(<ApplicationRoutes />, {
    route,
    project: {
      allAppliedPermissions: mapResourceAccessToAppliedPermissions([PERMISSIONS.View]),
    },
    ...options,
  });
  return { history };
};

it('should render welcome page', async () => {
  renderApp();
  await screen.findByText('Develop applications for the Merchant Center');
});
