'use client';
import Link from 'next/link';
import { Stack, Text, chakra, Box, Button } from '@chakra-ui/react';
import ProgramDetailPage from '@/components/Templates/ProgramsPage/detailPage';

export default function ProgramDetails({ params: { programTitle } }: { params: { programTitle: string } }) {
  return (
    <>
      <Stack pt="10px">
        <Box textAlign="right"
          pr="20px">
          <Link href="https://portal.piaic.org/" target="_blank">
            <Button colorScheme="orange" m='4px' >Apply Now</Button>
          </Link>
        </Box>
      </Stack>

      <ProgramDetailPage programTitle={decodeURI(programTitle)} />
    </>
  );
}