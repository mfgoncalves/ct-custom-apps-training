import { TClientLoggingGraphql, TLocalizedStringGraphql } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { ShoppingList, ShoppingListDraft } from '@commercetools/platform-sdk';

export type TShoppingList = ShoppingList;
export type TShoppingListDraft = ShoppingListDraft;

export type TShoppingListDraftGraphql = Omit<TShoppingListDraft, 'name' | 'slug'> & {
  __typename: 'ShoppingListDraft';
  name?: TLocalizedStringGraphql;
  slug?: TLocalizedStringGraphql;
};

export type TShoppingListGraphql = Omit<
  TShoppingList,
  'name' | 'key' | 'createdBy' | 'lastModifiedBy'
> & {
  __typename: 'ShoppingList';
  createdBy: TClientLoggingGraphql;
  lastModifiedBy: TClientLoggingGraphql;
  nameAllLocales: TLocalizedStringGraphql;
  slug: TLocalizedStringGraphql;
};

export type TShoppingListBuilder = TBuilder<ShoppingList>;
export type TShoppingListDraftBuilder = TBuilder<ShoppingListDraft>;

export type TCreateShoppingListBuilder = () => TShoppingListBuilder;
export type TCreateShoppingListDraftBuilder = () => TShoppingListDraftBuilder;
