'use client';
import { Center, Stack, Spinner } from '@chakra-ui/react';

export default function Loading() {
  return (
    <>
      <Center>
        <Stack direction='row' spacing={4}>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
          <Spinner size='xs' />
          <Spinner size='sm' />
          <Spinner size='md' />
          <Spinner size='lg' />
          <Spinner size='xl' />
        </Stack>
      </Center>

    </>
  );
}