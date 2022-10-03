import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home, Store, About } from './pages';
import { Navbar } from './components';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/store' element={<Store />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
