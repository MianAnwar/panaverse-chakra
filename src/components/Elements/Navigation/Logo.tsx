import { Box, Text, useColorModeValue } from "@chakra-ui/react"
import Link from 'next/link';

export default function Logo(props: any) {
  return (
    <Box {...props}>
      <Link href="/">
        <Text fontSize="lg" fontWeight="bold" color={useColorModeValue('gray.700', 'white')}>
          Panavese DAO
      </Text>
      </Link>
    </Box>
  )
}