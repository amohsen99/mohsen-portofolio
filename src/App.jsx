import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'

function App() {
  const [isloaded, setIsLoaded] = useState(false  )
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    {!isloaded &&<LoadingScreen onComplete={() => setIsLoaded(true)}/>}

      <div>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      </div>
    </>
  )
}

export default App
