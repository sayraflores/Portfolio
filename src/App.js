import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router';
import Contact from './pages/ContactUs';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/Portfolio' exact="true" element={<Portfolio />} />
        <Route path='/Contact' exact="true" element={<Contact />} />
        <Route path='/' element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
