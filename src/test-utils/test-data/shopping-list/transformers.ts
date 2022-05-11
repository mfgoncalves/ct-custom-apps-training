import { LocalizedString, TLocalizedStringGraphql } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import { TShoppingList, TShoppingListGraphql } from './types';

const transformers = {
  default: Transformer<TShoppingList, TShoppingList>('default', {
    buildFields: ['name', 'slug', 'createdBy', 'lastModifiedBy'],
  }),
  rest: Transformer<TShoppingList, TShoppingList>('rest', {
    buildFields: ['name', 'slug', 'createdBy', 'lastModifiedBy'],
  }),
  graphql: Transformer<TShoppingList, TShoppingListGraphql>('graphql', {
    buildFields: ['createdBy', 'lastModifiedBy'],
    addFields: () => {
      const nameAllLocales = LocalizedString.random().buildGraphql<TLocalizedStringGraphql>();
      const slugAllLocales = LocalizedString.random().buildGraphql<TLocalizedStringGraphql>();

      return {
        __typename: 'ShoppingList',
        nameAllLocales,
        slugAllLocales,
      };
    },
  }),
};

export default transformers;
