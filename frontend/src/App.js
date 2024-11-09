import './App.css';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MangaPage from './pages/MangaPage';
import Product from './pages/Product';
import CustomOrderPage from './pages/CustomOrderPage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/manga-books' element={<MangaPage/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/custom-order' element={<CustomOrderPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
