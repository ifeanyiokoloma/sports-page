import About from "./components/About";
import Career from "./components/Career";
import Contracts from "./components/Contracts";
import Deals from "./components/Deals";
import Draft from "./components/Draft";
import Hero from "./components/Hero";
import Marketing from "./components/Marketing";
import Performance from "./components/Performance";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import { ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";
import { theme } from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Layout>
        <Hero />
        <About />
        <Contact />
        <Draft />
        <Contracts />
        <Deals />
        <Performance />
        <Career />
        <Marketing />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
