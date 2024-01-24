import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './About';
import Home from './Home';
import Vans from './Vans';
import VanDetails from './VanDetails';
import Layout from "./Layout";

import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={ <Home />} />
        <Route path='/about' element={ <About />} />
        <Route path='/vans' element={ <Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
      


  



export default App;
