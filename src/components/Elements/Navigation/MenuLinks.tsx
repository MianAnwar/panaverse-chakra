import { Box, Stack, Text, Link, useColorModeValue } from '@chakra-ui/react';
import Logo from '@/components/Elements/Navigation/Logo';

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
          <MenuItem to="/teams">Teams</MenuItem>
          <MenuItem to="/locations">Locations</MenuItem>
          <MenuItem to="/benefits">Benefits</MenuItem>
          <MenuItem to="/jobs">Jobs</MenuItem>
          <MenuItem to="/students">Students</MenuItem>
        </Stack>
      </Box>

    </Stack>
  )
}
