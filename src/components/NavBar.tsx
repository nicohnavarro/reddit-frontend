import React from 'react';
import { Box, Link, Flex, Button } from '@chakra-ui/core';
import NextLink from 'next/link';
import {useMeQuery} from '../generated/graphql';
interface NavBarProp {}

export const NavBar: React.FC<NavBarProp> = ({}) => {
  const [{data, fetching}] = useMeQuery()
  let body = null;

  if(fetching){

  }else if(!data?.me){
    body =(
      <>
        <NextLink href="/login">
          <Link color='white' mr={2}>Login</Link>
        </NextLink>
        <NextLink href="/home">
          <Link color='white'>Home</Link>
        </NextLink>
      </>
    );
  }else{
    body=(
      <Box>
        <Box mr={2}>{data.me.username}</Box>
        <Button variant="link"> logout</Button>
      </Box>
    );

  }
  return (
    <Flex bg="tomato" >
     <Box p={4} ml={"auto"}>
      {body}
     </Box>
    </Flex>
  );
};
