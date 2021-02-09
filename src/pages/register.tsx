import React from 'react'
import {Formik, Form} from 'formik';
import Wrapper from './Wrapper';
import {InputField} from '../components/InputField';
import {Button, Box} from '@chakra-ui/react';

interface registerProps{

}

const Register: React.FC<registerProps> = ({}) => {
  return (
  <Wrapper variant="small">
    <Formik
    initialValues = {{username:"", password:""}}
    onSubmit={(values) => {
      console.log(values);
    }}
    >
    {({isSubmitting})=> (
      <Form>
        <Box mt={4}>
          <InputField name='username' placeholder='username' label='Username'/>
        </Box>
        <Box mt={4}>
          <InputField name='password' placeholder='password' label='Password' type='password'/>
        </Box>

        <Button 
        mt={4}
        type="submit"
        isLoading={isSubmitting}
        variantColor="teal">
        Register  
      </Button>
      </Form>
    )}
    </Formik>
  </Wrapper>
  );
};

export default Register;
