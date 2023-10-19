import * as Yup from 'yup';

export const  profileSchema = Yup.object().shape({
//     email: Yup.string().min(4, 'Email must 4 char').email('Invalid email')
//   .required('Email is required')
//     .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'email valid format'),
    // .matches(/^(?!.*@[^,]*,)/,'email valid format'),÷
    firstName: Yup.string()
    .min(3, 'First name must be at least 3 char')
    .required('Last name is required'),
    lastName: Yup.string()
    .min(3, 'Last name must be at least 3 char')
    .required('Last Name is required'),
    phone: Yup.string()
    .min(10, 'Phone name must be at least 10 char')
    .max(10, 'Phone name must be at least 10 char')
    .required('Phone is required'),


    
    
  });