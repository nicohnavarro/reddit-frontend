import React from 'react'
import {Formik, Form} from 'formik';
import Wrapper from './Wrapper';
import {InputField} from '../components/InputField';
import {Button, Box} from '@chakra-ui/react';
import {useMutation} from 'urql';
import {toErrorMap} from '../utils/toErrorMap';
import { useRouter } from 'next/router';
import {useRegisterMutation} from '../generated/graphql';
interface registerProps{

}

const REGISTER_MUT = `
mutation Register($username: String!, $password:String!){
  register(options:{ username: $username, password:$password }) {
    errors {
      field
      message
    }
    user {
      id
      username
    }
  }
}

`

const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  const [,register] = useRegisterMutation();//useMutation(REGISTER_MUT);
  return (
  <Wrapper variant="small">
    <Formik
    initialValues = {{username:"", password:""}}
    onSubmit={async (values,{setErrors}) => {
      console.log(values);
      const response = await register(values);
      if(response.data?.register.errors){
        setErrors(toErrorMap(response.data.register.errors));
      }
      else if (response.data?.register.user){
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
        Register  
      </Button>
      </Form>
    )}
    </Formik>
  </Wrapper>
  );
};

export default Register;
