import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, Stack, useColorMode } from '@chakra-ui/react';

export default function ToggleLayout() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack direction={'row'} spacing={7}>
      <Button onClick={toggleColorMode}>
        {colorMode !== 'dark' ? <MoonIcon /> : <SunIcon />}
      </Button>
      <Button onClick={toggleColorMode}>
        Portal
      </Button>
    </Stack>
  )
}

