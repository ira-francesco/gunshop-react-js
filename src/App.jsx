import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Shop from "./Shop";
import ShoppingCart from "./ShoppingCart";
import Home from "./Home";
export default function App() {
  const style = document.body.style;

  useEffect(() => {
    style.margin = "0px";
    style.padding = "0px";
    style.width = "100%";
    style.height = "100vh";
    style.overflow = "hidden";
    style.fontFamily = "sans-serif";
  }, []);

  return (
    <Router>
      <Navbar />
      <div
        className="App"
        style={{
          width: "100%",
          height: "110vh"
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </Router>
  );
}
