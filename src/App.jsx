import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarWithStyling from './components/navbar/NavbarWithStyling.module.css';

function Navbar() {
  return (
    <div>
      <h1>FSW 2</h1>
      <ul>
        <li>About Me</li>
        <li>FAQ</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const listMenu = ["Home", "About", "Logout"];

  return (
    <>
      {<Navbar />}
      <NavbarWithStyling
        menu={listMenu}
        name="Student"
        age="20"
        address="Semarang"
      />
      <NavbarWithStyling
        name="Student 2"
        age="20"
        address="Bandung"
      />
      <NavbarWithStyling
        menu={["About you", "About me", "About us"]}
        name="Student 3"
        age="20"
        address="Jakarta"
      />
    </>
  )
}

export default App
