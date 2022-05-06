import TextInput from '@commercetools-uikit/text-input';
import omitEmpty from 'omit-empty-es';
import { FormikConfig } from 'formik';

type Validate = FormikConfig<any>['validate'];

const validate: Validate = (formikValues) => {
  const errors = {
    key: {},
    roles: {},
  };

  if (TextInput.isEmpty(formikValues.key)) {
    // @ts-ignore
    errors.key.missing = true;
  }
  if (Array.isArray(formikValues.roles) && formikValues.roles.length === 0) {
    // @ts-ignore
    errors.roles.missing = true;
  }
  return omitEmpty(errors);
};

export default validate;
