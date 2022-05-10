import { entryPointUriPath } from './constants';

const DEFAULT = `/:projectKey/${entryPointUriPath}`;

export const ROUTES = {
  home: '/',
  // Channels
  channelList: `${DEFAULT}/channels`,
  channelDetails: `${DEFAULT}/channels/:id`,
  // Shopping Lists
  addShoppingList: `${DEFAULT}/shopping-lists/new`,
  shoppingLists: `${DEFAULT}/shopping-lists`,
  shoppingListDetails: `${DEFAULT}/shopping-lists/:id`,
  shoppingListDetailsItems: `${DEFAULT}/shopping-lists/:id/items`,
};
