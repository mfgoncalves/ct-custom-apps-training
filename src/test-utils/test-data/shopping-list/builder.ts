import { Builder } from '@commercetools-test-data/core';
import type { ShoppingList } from '@commercetools/platform-sdk';
import generator from './generator';
import transformers from './transformers';
import type { TCreateShoppingListBuilder } from './types';

const Model: TCreateShoppingListBuilder = () =>
  Builder<ShoppingList>({
    generator,
    transformers,
  });

export default Model;
