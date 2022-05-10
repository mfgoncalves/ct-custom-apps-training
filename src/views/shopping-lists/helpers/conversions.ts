import { transformLocalizedFieldToLocalizedString } from '@commercetools-frontend/l10n';
import { useShoppingListDetailsFetcher } from '../../../hooks/use-shopping-lists-connector';

type ShoppingList = ReturnType<typeof useShoppingListDetailsFetcher>['shoppingList'];

export interface FormValues {
  key: string;
  name: Record<string, string>;
}

export const docToFormValues = (shoppingList: Partial<ShoppingList>): FormValues => ({
  key: shoppingList?.key ?? '',
  name: transformLocalizedFieldToLocalizedString(shoppingList?.nameAllLocales ?? []) ?? {},
});

export const formValuesToDoc = () => ({});
