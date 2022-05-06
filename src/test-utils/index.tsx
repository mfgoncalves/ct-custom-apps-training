import React from 'react';
import { createApolloClient } from '@commercetools-frontend/application-shell';
import {
  renderApp,
  renderAppWithRedux,
} from '@commercetools-frontend/application-shell/test-utils';
import ApplicationRoutes from '../routes';
import { entryPointUriPath } from '../constants/constants';

const mergeWithDefaultOptions = (options: any = {}) => ({
  ...options,
  environment: {
    ...(options.environment || {}),
    entryPointUriPath,
  },
  apolloClient: createApolloClient(),
});

const renderApplication = (ui, options) =>
  renderApp(<ApplicationRoutes>{ui}</ApplicationRoutes>, mergeWithDefaultOptions(options));

const renderApplicationWithRedux = (ui, options = {}) =>
  renderAppWithRedux(<ApplicationRoutes>{ui}</ApplicationRoutes>, mergeWithDefaultOptions(options));

export { renderApplication, renderApplicationWithRedux };
