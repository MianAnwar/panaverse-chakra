import { Flex, useColorModeValue } from "@chakra-ui/react"

export default function NavBarContainer({ children, ...extraStyles }: { children: React.ReactNode }) {
  return (
    <Flex
      as="nav"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={3}
      pt={5}
      bg={useColorModeValue('gray.50', 'gray.900')}
      {...extraStyles}>

      {children}

    </Flex>
  )
}

