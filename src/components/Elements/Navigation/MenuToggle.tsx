import { Box } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

export default function MenuToggle({ toggle, isOpen }: { toggle: () => void, isOpen: boolean }) {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ?
        <HamburgerIcon />
        :
        <HamburgerIcon />
      }
    </Box>
  )
}

