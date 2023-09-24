import "./main.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
