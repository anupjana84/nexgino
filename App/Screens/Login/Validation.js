import * as Yup from 'yup';

export const  loinSchema = Yup.object().shape({
  email: Yup.string().min(4, 'Email must 4 char').email('Invalid email')
  .matches(/^(?!.*@[^,]*,)/,'email valid format'),
    password: Yup.string()
      .min(5, 'password must be at least 5 char')
      .max(50, 'password  max  12 char')
      .required('password is required'),
    
  });