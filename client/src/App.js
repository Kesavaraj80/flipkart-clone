import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components

import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Cart from './components/cart/Cart';
import './App.css';
import { TemplateProvider } from './templates/TemplateProvider'
import ContextProvider from './context/ContextProvider';
import DetailView from './components/product/DetailView';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path='/product/:id' element={DetailView} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>

  );
}

export default App;
