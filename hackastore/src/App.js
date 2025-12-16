import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./db.json")
    .then((res) => res.json())
    .then(data => setProducts(data.products))
  });

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Header />
          <div className="oage-inner-content">
            <div className="section-title">
              <h3>Serviços</h3>
              <div className="underline"></div>
            </div>
            <div className="main-content">
              <ProductsList products={products}/>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
