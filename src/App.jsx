import "./main.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import { AnimatePresence } from "framer-motion";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

function App() {
  const location = useLocation();
  return (
    <I18nextProvider i18n={i18n} defaultNS={"translation"}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </I18nextProvider>
  );
}

export default App;
