import "./App.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Service from "./pages/Services/Service";
import Product from "./pages/Products/Product";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ScrollToTop from "./components/ScrollToTop";
import Test from "./components/antd/Test";
import StyledComp from "./components/styled/StyledComp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/services" element={<Service />} />
          <Route  path="/products" element={<Product />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/contact" element={<Contact />} />
          <Route  path="/register" element={<Register />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/test" element={<Test />} />
          <Route  path="/style" element={<StyledComp />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
