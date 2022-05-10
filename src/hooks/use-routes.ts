import mapValues from 'lodash/mapValues';
import { useMemo } from 'react';
import { generatePath, match, useHistory, useLocation, useRouteMatch } from 'react-router';
import { ROUTES } from '../constants';

type MakeRoute = (x: { path: string; currentMatch: match; goTo: GoToFn }) => Route;
type GoToFn = ReturnType<typeof useHistory>['push'];
type GoFn = (params?: any) => void;

interface Route {
  path: string;
  getUrl: (params?: Record<string, unknown>) => string;
  go: GoFn;
}

const makeRoute: MakeRoute = ({ path, currentMatch, goTo }) => {
  const { params: prevRouteParams } = currentMatch;

  const getUrl = (params = {}) =>
    generatePath(path, {
      ...prevRouteParams,
      ...params,
    });

  const preRoute = {
    path,
    getUrl,
  };

  const route = {
    ...preRoute,
    go: createGo({
      goTo,
      route: preRoute,
    }),
  };

  return route;
};

export default function useRoutes() {
  const location = useLocation();
  const currentMatch = useRouteMatch();
  const {} = currentMatch;
  const { push: goTo } = useHistory();

  const routes = useMemo(() => {
    const simpleRoutes = mapValues(ROUTES, (path) =>
      makeRoute({
        path,
        currentMatch,
        goTo,
      }),
    );
    return {
      ...simpleRoutes,
    };
  }, [currentMatch, goTo, location]);

  return routes;
}

type CreateGo = (x: { route: Omit<Route, 'go'>; goTo: GoToFn }) => GoFn;
const createGo: CreateGo =
  ({ route, goTo }) =>
  (params = {}) => {
    const url = route.getUrl(params);
    goTo(url);
  };
