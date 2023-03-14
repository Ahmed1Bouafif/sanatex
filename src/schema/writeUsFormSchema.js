import * as yup from 'yup';
const PHONE_REGEX =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const writeUsFormSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().required('Email is required').email('Email not valid'),
  phone: yup.string().matches(PHONE_REGEX, {
    message: 'Phone number is not valid',
    excludeEmptyString: true,
  }),
  city: yup.string(),
  street: yup.string(),
});
