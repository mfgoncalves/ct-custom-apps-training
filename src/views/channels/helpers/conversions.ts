import LocalizedTextInput from '@commercetools-uikit/localized-text-input';
import {
  transformLocalizedFieldToLocalizedString,
  transformLocalizedStringToLocalizedField,
} from '@commercetools-frontend/l10n';

export interface FormValues {
  key: string;
  roles: string[];
  name: Record<string, string>;
}

export const docToFormValues = (channel: any, languages: any[]): FormValues => ({
  key: channel?.key ?? '',
  roles: channel?.roles ?? [],
  name: LocalizedTextInput.createLocalizedString(
    languages,
    transformLocalizedFieldToLocalizedString(channel?.nameAllLocales ?? []) ?? {},
  ),
});

export const formValuesToDoc = (formValues: FormValues) => ({
  key: formValues.key,
  roles: formValues.roles,
  nameAllLocales: transformLocalizedStringToLocalizedField(
    LocalizedTextInput.omitEmptyTranslations(formValues.name),
  ),
});
