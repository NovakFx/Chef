import './App.css';

import NavbarDown from './Component/Navbars/NavbarDown';
import NavbarUp from './Component/Navbars/NavbarUp';
// import NavbarUp from './Component/Navbars/NavbarUp';
import Buy from './Component/Buy'

    


function App() {
  return (
   
      <div className="App">
    {/* <NavbarUp /> */}
    <Buy/>
    <NavbarUp />
    <NavbarDown />

    </div>
  );
}

export default App;
