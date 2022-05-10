import * as Yup from 'yup';

const signInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Enter a valid email')
    .label('Email'),
  password: Yup.string().required('Password is required').label('Password'),
});

const signUpValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Enter a valid email')
    .label('Email'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be atleast 8 characters long')
    .label('Password'),
});

export { signInValidationSchema, signUpValidationSchema };
