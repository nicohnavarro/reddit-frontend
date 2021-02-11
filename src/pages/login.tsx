
import React from 'react'
import {Formik, Form} from 'formik';
import Wrapper from './Wrapper';
import {InputField} from '../components/InputField';
import {Button, Box} from '@chakra-ui/react';
import {useLoginMutation} from '../generated/graphql';
import {toErrorMap} from '../utils/toErrorMap';
import { useRouter } from 'next/router';

interface loginProps{}

const Login: React.FC<loginProps> = ({}) => {
  const router = useRouter();
  const [,login] = useLoginMutation();
  return (
  <Wrapper variant="small">
    <Formik
    initialValues = {{username:"", password:""}}
    onSubmit={async (values,{setErrors}) => {
      console.log(values);
      const response = await login({options:values});
      if(response.data?.login.errors){
        setErrors(toErrorMap(response.data.login.errors));
      }
      else if (response.data?.login.user){
        router.push("/");

      }
    }}
    >
    {({isSubmitting})=> (
      <Form>
        <Box mt={4}>
          <InputField name='username' label='Username'/>
        </Box>
        <Box mt={4}>
          <InputField name='password' label='Password' type='password'/>
        </Box>

        <Button 
        mt={4}
        type="submit"
        isLoading={isSubmitting}
        variantcolor="teal">
        Login  
      </Button>
      </Form>
    )}
    </Formik>
  </Wrapper>
  );
};

export default Login;
