import { MantineProvider } from "@mantine/core";
import Homepage from "./components/homepage";
import WordBanks from "./components/wordbanks";
import Guides from "./components/guides";
import PastPaper from "./components/pastpaper";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProviderForSpecificRoutes } from "./guards/AuthProvider";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <AuthProviderForSpecificRoutes>
          <Routes>
            <Route path="/wordbanks" element={<WordBanks />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/pastpapers" element={<PastPaper />} />
          </Routes>
        </AuthProviderForSpecificRoutes>
      </Router>
    </MantineProvider>
  );
}
