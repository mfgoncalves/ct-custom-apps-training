import { entryPointUriPath } from './constants';

const DEFAULT = `/:projectKey/${entryPointUriPath}`;

export const ROUTES = {
  // Channels
  channelList: `${DEFAULT}/channels`,
  channelDetails: `${DEFAULT}/channels/:id`,
  // Shopping Lists
  addShoppingList: `${DEFAULT}/shopping-lists/new`,
  shoppingLists: `${DEFAULT}/shopping-lists`,
  shoppingListsDetails: `${DEFAULT}/shopping-lists/:id`,
};
