import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <Header/>
      </div>
    </Router>
  );
}

export default App;
