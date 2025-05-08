import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Facilities from './Components/Facilities/Facilities';
import Home from './Components/Home/Home';
import Navbar from './Components/OtherElements/Navbar'
import Footer from './Components/OtherElements/Footer'


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
