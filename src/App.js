import { MantineProvider, Text } from '@mantine/core';
import Homepage from './components/homepage';
import WordBanks from './components/wordbanks';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
        {/* <Homepage></Homepage> */}
        <WordBanks></WordBanks>
    </MantineProvider>
  );
}

