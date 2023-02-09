import { Box, Text, useColorModeValue } from "@chakra-ui/react"

export default function Logo(props: any) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold" color={useColorModeValue('gray.700', 'white')}>
        Pan
      </Text>
    </Box>
  )
}