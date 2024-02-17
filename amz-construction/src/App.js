import './App.css';
import Nav from './Nav';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Reviews from './pages/Reviews';
import Services from './pages/Services';

function App() {
  return (
    <>
      <Nav></Nav>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/reviews' element={<Reviews/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
