
import './App.css'
import Home from "./components/home-page/Home"
import Contact from "./routes/Contact"
import Nav from "./components/navbar/Nav"
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <Nav />
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App
