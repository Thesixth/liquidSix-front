import { useState } from 'react'
import './App.css';
import MenuSection from './sections/MenuSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import WelcomeSection from './sections/WelcomeSection';
import VisionSection from './sections/VisionSection';
import ReserveSection from './sections/ReserveSection';
import Footer from './sections/Footer';
import Nav from './components/Nav';
import "./styles/style.css";


const addItem = (e) => {
  e.preventDefault()
  console.log(e.target)
}

const App = () => {
  const [newMenuItem, setNewMenuItem] = useState()
  const handleNewMenuItem = (e) => {
    setNewMenuItem(e.target.value)
  }
  return (
    <div className='container-fluid'>
      <Nav />
      <WelcomeSection />
      <VisionSection />
      <MenuSection />
      <ReserveSection />
      <Footer />
      
    </div>
  );
}

export default App;
