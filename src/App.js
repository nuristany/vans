import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './About';
import Home from './Home';
import Vans from './Vans';
import VanDetails from './VanDetails';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/about' element={ <About />} />
      <Route path='/vans' element={ <Vans />} />
      <Route path="/vans/:id" element={<VanDetails />} />
      
    </Routes>
  </BrowserRouter>
  );
}


  



export default App;
