import './App.css';
import {  Routes, Route } from 'react-router-dom';
import NavbarDown from './Component/Navbars/DownNavBars/NavbarDown';
import NavbarUp from './Component/Navbars/NavbarUp';
import HomePage from './Component/Home/HomePage';
import ShopAllPage from './Component/ShopAll/ShopAllPage';

function App() {
  return (
    <>
    <NavbarUp />
    <NavbarDown />

      <Routes>
        <Route path='/' element={<HomePage />} />   
        <Route path='/ShopAllPage' element={<ShopAllPage />} />
      </Routes>
    
    </>
  );
}

export default App;
