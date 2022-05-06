import LocalizedTextField from '@commercetools-uikit/localized-text-field';
import SelectField from '@commercetools-uikit/select-field';
import Spacings from '@commercetools-uikit/spacings';
import TextField from '@commercetools-uikit/text-field';
import { useFormik } from 'formik';
import React from 'react';
import { useIntl } from 'react-intl';
import { CHANNEL_ROLES } from './constants';
import messages from './messages';
import validate from './validate';

const getRoleOptions = Object.keys(CHANNEL_ROLES).map((key) => ({
  label: CHANNEL_ROLES[key],
  value: CHANNEL_ROLES[key],
}));

const ChannelDetailsForm = (props) => {
  const intl = useIntl();
  const formik = useFormik({
    initialValues: props.initialValues,
    onSubmit: props.onSubmit,
    enableReinitialize: true,
    validate,
  });

  const formElements = (
    <Spacings.Stack scale="l">
      <TextField
        name="key"
        title={intl.formatMessage(messages.channelKeyLabel)}
        value={formik.values.key}
        // @ts-ignore
        errors={formik.errors.key}
        touched={Boolean(formik.touched.key)}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        isReadOnly={props.isReadOnly}
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
        title={intl.formatMessage(messages.channelNameLabel)}
        value={formik.values.name}
        // @ts-ignore
        errors={formik.errors.name}
        touched={Boolean(formik.touched.name)}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        selectedLanguage={props.dataLocale}
        isReadOnly={props.isReadOnly}
        horizontalConstraint={13}
      />
      <SelectField
        name="roles"
        title={intl.formatMessage(messages.channelRolesLabel)}
        value={formik.values.roles}
        // @ts-ignore
        errors={formik.errors.roles}
        // @ts-ignore
        touched={formik.touched.roles as boolean[]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        isMulti
        options={getRoleOptions}
        isReadOnly={props.isReadOnly}
        isRequired
        horizontalConstraint={13}
      />
    </Spacings.Stack>
  );

  return props.children({
    formElements,
    values: formik.values,
    isDirty: formik.dirty,
    isSubmitting: formik.isSubmitting,
    submitForm: formik.handleSubmit,
    resetForm: formik.resetForm,
  });
};

ChannelDetailsForm.displayName = 'ChannelDetailsForm';

export default ChannelDetailsForm;
