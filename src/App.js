import { MantineProvider, Text } from '@mantine/core';
import Homepage from './components/homepage';
import WordBanks from './components/wordbanks';
import Guides from './components/guides';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
        {/* <Homepage></Homepage> */}
        {/* <WordBanks></WordBanks> */}
        <Guides></Guides>
    </MantineProvider>
  );
}

