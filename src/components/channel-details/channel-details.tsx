import {
  useShowApiErrorNotification,
  useShowNotification,
} from '@commercetools-frontend/actions-global';
import { FormModalPage, PageNotFound } from '@commercetools-frontend/application-components';
import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';
import { DOMAINS, NO_VALUE_FALLBACK } from '@commercetools-frontend/constants';
import { formatLocalizedString } from '@commercetools-frontend/l10n';
import { useIsAuthorized } from '@commercetools-frontend/permissions';
import LoadingSpinner from '@commercetools-uikit/loading-spinner';
import { ContentNotification } from '@commercetools-uikit/notifications';
import Spacings from '@commercetools-uikit/spacings';
import Text from '@commercetools-uikit/text';
import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';
import { PERMISSIONS } from '../../constants/constants';
import {
  useChannelDetailsFetcher,
  useChannelDetailsUpdater,
} from '../../hooks/use-channels-connector';
import ChannelsDetailsForm from './channel-details-form';
import { docToFormValues } from './conversions';
import messages from './messages';
import { transformErrors } from './transform-errors';

const ChannelDetails = (props) => {
  const intl = useIntl();
  const params = useParams<{ id: string }>();
  const { loading, error, channel } = useChannelDetailsFetcher(params.id);
  const { dataLocale, projectLanguages } = useApplicationContext((context) => ({
    dataLocale: context.dataLocale,
    projectLanguages: context.project.languages,
  }));
  const canManage = useIsAuthorized({
    demandedPermissions: [PERMISSIONS.Manage],
  });
  const showNotification = useShowNotification();
  const showApiErrorNotification = useShowApiErrorNotification();
  const channelDetailsUpdater = useChannelDetailsUpdater();
  const handleSubmit = useCallback(
    async (formikValues, formikHelpers) => {
      try {
        await channelDetailsUpdater.execute({
          original: channel,
          nextDraft: formikValues,
        });
        showNotification({
          kind: 'success',
          domain: DOMAINS.SIDE,
          text: intl.formatMessage(messages.channelUpdated, {
            channelName: formatLocalizedString(formikValues, {
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
    [
      channel,
      channelDetailsUpdater,
      dataLocale,
      intl,
      projectLanguages,
      showApiErrorNotification,
      showNotification,
    ],
  );

  return (
    <ChannelsDetailsForm
      initialValues={docToFormValues(channel, projectLanguages)}
      onSubmit={handleSubmit}
      isReadOnly={!canManage}
      dataLocale={dataLocale}
    >
      {(formProps) => {
        return (
          <FormModalPage
            title={formatLocalizedString(
              {
                name: formProps.values?.name,
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
            isPrimaryButtonDisabled={formProps.isSubmitting || !formProps.isDirty || !canManage}
            isSecondaryButtonDisabled={!formProps.isDirty}
            onSecondaryButtonClick={formProps.resetForm}
            onPrimaryButtonClick={formProps.submitForm}
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
                <Text.Body>{intl.formatMessage(messages.channelDetailsErrorMessage)}</Text.Body>
              </ContentNotification>
            )}
            {channel && formProps.formElements}
            {channel === null && <PageNotFound />}
          </FormModalPage>
        );
      }}
    </ChannelsDetailsForm>
  );
};
ChannelDetails.displayName = 'ChannelDetails';

export default ChannelDetails;
