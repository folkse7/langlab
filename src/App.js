import { MantineProvider, Text } from "@mantine/core";
import Homepage from "./components/homepage";
import WordBanks from "./components/wordbanks";
import Guides from "./components/guides";
import PastPaper from "./components/pastpaper";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/wordbanks" element={<WordBanks />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/pastpapers" element={<PastPaper />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}
