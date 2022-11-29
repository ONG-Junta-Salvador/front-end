import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import FichaTecnica from "./pages/FichaTecnica";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" exact="true" element={<Home />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/projetos" element={<Projetos />}></Route>
        <Route path="/ficha-tecnica" element={<FichaTecnica />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
