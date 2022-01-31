import { BrowserRouter as Router } from "react-router-dom"
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainComponent from "./components/MainComponent";
import ChakraTheme from "./configs/ChakraTheme";
// font
import "@fontsource/montserrat";

const App = () => {
  return (
    <main>
      <ChakraProvider theme={extendTheme(ChakraTheme)}>
        <Router>
          <Navbar />
          <MainComponent />
          <Footer />
        </Router>
      </ChakraProvider>
    </main>
  )
}

export default App;
