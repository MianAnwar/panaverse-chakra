import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Logo from '@/components/Elements/Navigation/Logo';
import Link from 'next/link';

function MenuItem({ children, to = "/", ...rest }: { children: React.ReactNode, to: string }) {
  return (
    <Link href={to}>
      <Text display="block" {...rest} color={useColorModeValue('gray.700', 'white')} px={4}>
        {children}
      </Text>
    </Link>
  )
}

export default function MenuLinks({ isOpen }: { isOpen: boolean }) {
  return (
    <Stack
      align="flex-start"
      ml="3"
      justify={["flex-start"]}
      direction={["column", "row"]}>

      <Logo w={["100%", "80px", "180px"]} />
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}>
        <Stack
          spacing={[6, -4, 4, 1]}
          align="center"
          justify={["center", "space-around", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/programs">Programs</MenuItem>
          <MenuItem to="/programs">Locations</MenuItem>
          <MenuItem to="/programs">Benefits</MenuItem>
          <MenuItem to="/programs">Blogs</MenuItem>
          <MenuItem to="/programs">Students</MenuItem>
        </Stack>
      </Box>

    </Stack>
  )
}
