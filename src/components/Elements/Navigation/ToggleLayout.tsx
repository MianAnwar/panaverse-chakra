
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, Stack, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';

export default function ToggleLayout() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack direction={'row'} spacing={7}>
      <Button onClick={toggleColorMode}>
        {colorMode !== 'dark' ? <MoonIcon /> : <SunIcon />}
      </Button>
      <Link href="https://portal.piaic.org/" target="_blank">
        <Button>
          Portal
      </Button>
      </Link>
    </Stack>
  )
}

