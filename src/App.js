import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./components/MovieDetail";
import GlobalStyle from "./GlobalStyle";
import Nav from "./components/Nav";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/capture/" element={<AboutUs />} />
          <Route path="/capture/work" element={<OurWork />} />
          <Route path="/capture/work/:title" element={<MovieDetail />} />
          <Route path="/capture/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
