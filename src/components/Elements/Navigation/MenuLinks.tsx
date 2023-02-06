import { Box, Stack, Text, Link, useColorModeValue } from '@chakra-ui/react';

function MenuItem({ children, to = "/", ...rest }: { children: React.ReactNode, to: string }) {
  return (
    <Link href={to}>
      <Text display="block" {...rest} color={useColorModeValue('gray.700', 'white')} fontWeight="medium" px={4}>
        {children}
      </Text>
    </Link>
  )
}

export default function MenuLinks({ isOpen }: { isOpen: boolean }) {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}>
      <Stack
        spacing={{ base: 4, md: 10 }}
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
  )
}
