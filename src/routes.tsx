import { PageUnauthorized } from '@commercetools-frontend/application-components';
import { useIsAuthorized } from '@commercetools-frontend/permissions';
import Spacings from '@commercetools-uikit/spacings';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Channels from './components/channels';
import Welcome from './components/welcome';
import { PERMISSIONS } from './constants/constants';
import useRoutes from './hooks/use-routes';
import ShoppingLists from './views/shopping-lists/list/shopping-lists';

interface Props {
  children?: React.ReactNode;
}

const ApplicationRoutes = (_: Props) => {
  const routes = useRoutes();

  // We can evaluate the user permissions and use the information to restrict
  // certain parts of the application.
  // For example, we can show an unauthorized page if the user does not have
  // the permission to `view` products.
  const canView = useIsAuthorized({
    demandedPermissions: [PERMISSIONS.View],
  });

  if (!canView) {
    return <PageUnauthorized />;
  }

  return (
    <Spacings.Inset scale="l">
      <Switch>
        <Route path={routes.channelList.path}>
          <Channels linkToWelcome={routes.home.path} />
        </Route>
        <Route path={routes.shoppingLists.path}>
          <ShoppingLists linkToWelcome={routes.home.path} />
        </Route>
        <Route>
          <Welcome />
        </Route>
      </Switch>
    </Spacings.Inset>
  );
};
ApplicationRoutes.displayName = 'ApplicationRoutes';

export default ApplicationRoutes;
