import { BrowserRouter as Router } from "react-router-dom"
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import MainComponent from "./components/MainComponent";
import ChakraTheme from "./configs/ChakraTheme";

const App = () => {
  return (
    <main>
      <ChakraProvider theme={extendTheme(ChakraTheme)}>
        <Router>
          <Navbar />
          <MainComponent />
        </Router>
      </ChakraProvider>
    </main>
  )
}

export default App;
