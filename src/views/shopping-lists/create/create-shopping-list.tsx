import { FormModalPage } from '@commercetools-frontend/application-components';
import { useIsAuthorized } from '@commercetools-frontend/permissions';
import LocalizedTextField from '@commercetools-uikit/localized-text-field';
import { createLocalizedString } from '@commercetools-uikit/localized-utils';
import Spacings from '@commercetools-uikit/spacings';
import TextField from '@commercetools-uikit/text-field';
import { useFormik } from 'formik';
import React from 'react';
import { useIntl } from 'react-intl';
import { PERMISSIONS } from '../../../constants';
import { useLocale } from '../../../hooks/use-locale';
import { useShoppingListCreator } from '../../../hooks/use-shopping-lists-connector';
import messages from '../details/messages';

interface Props {
  onClose: () => void;
  onSuccess?: (params: any) => void;
}

const CreateShoppingList = ({ onClose, onSuccess }: Props) => {
  const intl = useIntl();
  const { dataLocale, projectLanguages } = useLocale();

  const canManage = useIsAuthorized({
    demandedPermissions: [PERMISSIONS.Manage],
  });

  const shoppingListCreator = useShoppingListCreator();

  const formik = useFormik({
    initialValues: {
      key: '',
      name: createLocalizedString(projectLanguages, {}),
    },
    onSubmit: async (values) => {
      const { data } = await shoppingListCreator.execute(values as any);
      if (onSuccess && data?.createShoppingList) {
        onSuccess({ id: data.createShoppingList.id });
      }
    },
  });

  return (
    <FormModalPage
      title="Create new shopping list"
      isOpen
      onClose={onClose}
      onPrimaryButtonClick={() => formik.handleSubmit()}
      onSecondaryButtonClick={onClose}
      isPrimaryButtonDisabled={formik.isSubmitting}
    >
      <form>
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

export default CreateShoppingList;
