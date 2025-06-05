import { HashRouterRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navigation/Navigation/Nav';
import Home from './Components/Home/home';
// import ContactForm from './Components/Contact/Contact';
import './App.css';


function App() {
  
  return (
    <div className="App">
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<ContactForm />} /> */}
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
