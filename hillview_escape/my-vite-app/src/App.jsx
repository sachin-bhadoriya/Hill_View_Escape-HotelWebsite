import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/JSXFiles/OtherElements/Footer'
import Home from './Components/JSXFiles/Home/Home'
import Navbar from './Components/JSXFiles/OtherElements/Navbar'
import Facilities from './Components/JSXFiles/Facilities/Facilities'

const App = () => {
return (
  <>
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Facilities" element={<Facilities />} />
        </Routes>
      <Footer />
    </Router>
  </>
);
};

export default App;
