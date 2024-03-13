import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import GlobalStyle from "./GlobalStyle";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/capture/" element={<AboutUs />} />
        <Route path="/capture/work" element={<OurWork />} />
        <Route path="/capture/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
