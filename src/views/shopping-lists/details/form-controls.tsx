import {
  useShowApiErrorNotification,
  useShowNotification,
} from '@commercetools-frontend/actions-global';
import { ConfirmationDialog, useModalState } from '@commercetools-frontend/application-components';
import { DOMAINS } from '@commercetools-frontend/constants';
import IconButton from '@commercetools-uikit/icon-button';
import { BinLinearIcon } from '@commercetools-uikit/icons';
import Text from '@commercetools-uikit/text';
import React from 'react';
import { useIntl } from 'react-intl';
import { transformErrors } from '../../../helpers';
import useRoutes from '../../../hooks/use-routes';
import {
  useShoppingListDeleter,
  useShoppingListDetailsFetcher,
} from '../../../hooks/use-shopping-lists-connector';
import messages from './messages';

interface Props {
  shoppingList: NonNullable<ReturnType<typeof useShoppingListDetailsFetcher>['shoppingList']>;
}

const FormControls = ({ shoppingList }: Props) => {
  const shoppingListDeleter = useShoppingListDeleter();
  const confirmDeleteShoppingListDialog = useModalState();
  const intl = useIntl();
  const routes = useRoutes();
  const showNotification = useShowNotification();
  const showApiErrorNotification = useShowApiErrorNotification();

  return (
    <>
      <IconButton
        icon={<BinLinearIcon />}
        label={intl.formatMessage(messages.delete)}
        isDisabled={false}
        onClick={confirmDeleteShoppingListDialog.openModal}
      />
      <ConfirmationDialog
        title={intl.formatMessage(messages.backToShoppingListsList)}
        isOpen={confirmDeleteShoppingListDialog.isModalOpen}
        onCancel={confirmDeleteShoppingListDialog.closeModal}
        onClose={confirmDeleteShoppingListDialog.closeModal}
        onConfirm={async () => {
          confirmDeleteShoppingListDialog.closeModal();
          try {
            await shoppingListDeleter.execute(shoppingList);
            routes.shoppingLists.go();
            showNotification({
              kind: 'success',
              domain: DOMAINS.SIDE,
              text: intl.formatMessage(messages.shoppingListDeleted),
            });
          } catch (graphQLErrors) {
            const transformedErrors = transformErrors(graphQLErrors);
            if (transformedErrors.unmappedErrors.length > 0) {
              showApiErrorNotification({
                errors: transformedErrors.unmappedErrors,
              });
            }
          }
        }}
      >
        <Text.Body intlMessage={messages.confirmDeleteShoppingList} />
      </ConfirmationDialog>
    </>
  );
};

export default FormControls;
