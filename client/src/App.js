import "./App.css";
import "./Custom.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="collection" element={<Collection />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
