import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarWithStyling from './components/navbar/NavbarWithStyling';
import HoverButton from './components/button/HoverButton';

function App() {
  const [count, setCount] = useState(0);
  const listMenu = ["Home", "About", "Logout"];

  return (
    <>
      {/* <Navbar /> */}
      <NavbarWithStyling
        menu={listMenu}
        name="Adi"
        age="20"
        address="Semarang"
      />
      <NavbarWithStyling
        name="Budi"
        age="20"
        address="Bandung"
      />
      <NavbarWithStyling
        menu={["About you", "About me", "About us"]}
        name="Cinta"
        age="20"
        address="Jakarta"
      />

      <HoverButton>
        <p>TEST CHILDREN</p>
      </HoverButton>
    </>
  )
}

export default App;
