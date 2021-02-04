import React from 'react'
import {Formik, Form} from 'formik';
import {FormErrorMessage, FormLabel, Input} from '@chakra-ui/react';
import Wrapper from './Wrapper';

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
    {({values, handleChange})=> (
      <Form>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input 
          value={values.username}
          onChange={handleChange}
          id="username" 
          placeholder="username"/>
        <FormErrorMessage></FormErrorMessage>
      </Form>
    )}
    </Formik>
  </Wrapper>
  );
};

export default Register;
