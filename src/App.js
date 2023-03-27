import { MantineProvider, Text } from '@mantine/core';
import Homepage from './components/homepage';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <Homepage></Homepage>
    </MantineProvider>
  );
}

