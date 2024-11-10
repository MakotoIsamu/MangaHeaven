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
import {AuthProvider} from './context/AuthContext'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/manga-books' element={<MangaPage/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/custom-order' element={<CustomOrderPage/>}/>
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </AuthProvider>
  );
}

export default App;
