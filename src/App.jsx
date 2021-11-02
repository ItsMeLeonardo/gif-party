/**
 * [_]add loading component
 *
 */

import "./App.css";
import Navbar from "./components/Navbar";
import { GifContextProvider } from "./context/GifContext";
import Routes from "./routes";

function App() {
  return (
    <GifContextProvider>
      <Navbar />
      <Routes />
    </GifContextProvider>
  );
}

export default App;
