import { defineMessages } from 'react-intl';

export default defineMessages({
  backToShoppingListsList: {
    id: 'ShoppingListDetails.backToShoppingListsList',
    defaultMessage: 'Back to shopping lists',
  },
  duplicateKey: {
    id: 'ShoppingListDetails.duplicateKey',
    defaultMessage: 'A shopping list with this key already exists.',
  },
  shoppingListUpdated: {
    id: 'ShoppingListDetails.shoppingListUpdated',
    defaultMessage: 'Shopping list {shoppinglistName} updated',
  },
  shoppingListKeyLabel: {
    id: 'ShoppingListDetails.shoppingListKeyLabel',
    defaultMessage: 'Shopping list key',
  },
  shoppingListNameLabel: {
    id: 'ShoppingListDetails.shoppingListNameLabel',
    defaultMessage: 'Shopping list name',
  },
  shoppingListRolesLabel: {
    id: 'ShoppingListDetails.shoppingListRolesLabel',
    defaultMessage: 'Shopping list roles',
  },
  modalTitle: {
    id: 'ShoppingListDetails.modalTitle',
    defaultMessage: 'Edit shopping list',
  },
  shoppingListDetailsErrorMessage: {
    id: 'ShoppingListDetails.errorMessage',
    defaultMessage:
      'We were unable to fetch the shopping list details. Please check your connection, the provided shoppinglist ID and try again.',
  },
});
