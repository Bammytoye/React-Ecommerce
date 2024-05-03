import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// pages
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'

// component
import SideBar from './components/SideBar'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  return (
    <div className='overflow-hidden'>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails />} />
          </Routes>
        <SideBar />
        <Footer />
      </Router>
    </div>
  )
}

export default App
