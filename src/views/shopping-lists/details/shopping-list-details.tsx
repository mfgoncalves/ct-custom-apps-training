import {
  useShowApiErrorNotification,
  useShowNotification,
} from '@commercetools-frontend/actions-global';
import { FormModalPage, PageNotFound } from '@commercetools-frontend/application-components';
import { DOMAINS, NO_VALUE_FALLBACK } from '@commercetools-frontend/constants';
import { formatLocalizedString } from '@commercetools-frontend/l10n';
import { useIsAuthorized } from '@commercetools-frontend/permissions';
import LoadingSpinner from '@commercetools-uikit/loading-spinner';
import LocalizedTextField from '@commercetools-uikit/localized-text-field';
import { ContentNotification } from '@commercetools-uikit/notifications';
import Spacings from '@commercetools-uikit/spacings';
import Text from '@commercetools-uikit/text';
import TextField from '@commercetools-uikit/text-field';
import { useFormik } from 'formik';
import React from 'react';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';
import { PERMISSIONS } from '../../../constants';
import { transformErrors } from '../../../helpers/transform-errors';
import { useLocale } from '../../../hooks/use-locale';
import { useShoppingListDetailsFetcher } from '../../../hooks/use-shopping-lists-connector';
import { useShoppingListDetailsUpdater } from '../../../hooks/use-shopping-lists-connector/use-shopping-lists-connector';
import { docToFormValues, FormValues } from '../helpers/conversions';
import messages from './messages';

interface Props {
  onClose: () => void;
}

const ShoppingListDetails = (props: Props) => {
  const params = useParams<{ id: string }>();
  const intl = useIntl();
  const { shoppingList, error, loading } = useShoppingListDetailsFetcher(params.id);

  const shoppingListUpdater = useShoppingListDetailsUpdater();
  const formik = useFormik<FormValues>({
    initialValues: docToFormValues(shoppingList),
    onSubmit: async (values, formikHelpers) => {
      try {
        if (!shoppingList) {
          return;
        }
        await shoppingListUpdater.execute({
          nextDraft: values,
          original: shoppingList,
        });
        showNotification({
          kind: 'success',
          domain: DOMAINS.SIDE,
          text: intl.formatMessage(messages.shoppingListUpdated, {
            shoppinglistName: formatLocalizedString(values as any, {
              key: 'name',
              locale: dataLocale,
              fallbackOrder: projectLanguages,
            }),
          }),
        });
      } catch (graphQLErrors) {
        const transformedErrors = transformErrors(graphQLErrors);
        if (transformedErrors.unmappedErrors.length > 0)
          showApiErrorNotification({
            errors: transformedErrors.unmappedErrors,
          });

        formikHelpers.setErrors(transformedErrors.formErrors);
      }
    },
    enableReinitialize: true,
  });

  const { dataLocale, projectLanguages } = useLocale();

  const canManage = useIsAuthorized({
    demandedPermissions: [PERMISSIONS.Manage],
  });

  const showNotification = useShowNotification();
  const showApiErrorNotification = useShowApiErrorNotification();

  return (
    <FormModalPage
      title={formatLocalizedString(
        {
          name: formik.values.name,
        },
        {
          key: 'name',
          locale: dataLocale,
          fallbackOrder: projectLanguages,
          fallback: NO_VALUE_FALLBACK,
        },
      )}
      isOpen
      onClose={props.onClose}
      isPrimaryButtonDisabled={formik.isSubmitting || !formik.dirty || !canManage}
      isSecondaryButtonDisabled={!formik.dirty}
      onSecondaryButtonClick={() => formik.resetForm}
      onPrimaryButtonClick={formik.submitForm}
      labelPrimaryButton={FormModalPage.Intl.save}
      labelSecondaryButton={FormModalPage.Intl.revert}
    >
      {loading && (
        <Spacings.Stack alignItems="center">
          <LoadingSpinner />
        </Spacings.Stack>
      )}
      {error && (
        <ContentNotification type="error">
          <Text.Body>{intl.formatMessage(messages.shoppingListDetailsErrorMessage)}</Text.Body>
        </ContentNotification>
      )}
      {shoppingList == null && <PageNotFound />}
      <form onSubmit={formik.submitForm}>
        <Spacings.Stack>
          <TextField
            name="key"
            title={intl.formatMessage(messages.shoppingListKeyLabel)}
            value={formik.values.key ?? ''}
            // @ts-ignore
            errors={formik.errors.key}
            touched={Boolean(formik.touched.key)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isReadOnly={!canManage}
            renderError={(errorKey) => {
              switch (errorKey) {
                case 'duplicate':
                  return intl.formatMessage(messages.duplicateKey);
                default:
                  return null;
              }
            }}
            isRequired
            horizontalConstraint={13}
          />
          <LocalizedTextField
            name="name"
            title={intl.formatMessage(messages.shoppingListNameLabel)}
            value={formik.values.name}
            // @ts-ignore
            errors={formik.errors.name}
            touched={Boolean(formik.touched.name)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isReadOnly={!canManage}
            selectedLanguage={dataLocale ?? 'en'}
            isRequired
            horizontalConstraint={13}
          />
        </Spacings.Stack>
      </form>
    </FormModalPage>
  );
};

export default ShoppingListDetails;
