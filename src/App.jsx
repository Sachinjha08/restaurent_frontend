import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nevbar';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './pages/About';
import Categories from './pages/Categories';
import SearchFood from './pages/SearchFood';
import Reservation from './pages/Reservation';
import Reviews from './pages/Reviews';
import Home from './pages/Home';
import FriedChickens from './menu-pages/FriedChicken';
import Drinks from './menu-pages/Drinks';
import Desserts from './menu-pages/Desserts';
import Burgers from './menu-pages/Borgers';
import Bbqs from './menu-pages/Bbqs';
import Pizzas from './menu-pages/Pizzas';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/search" element={<SearchFood />} />
        <Route path="/bbqs" element={<Bbqs />} />
        <Route path="/burgers" element={<Burgers />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/fried-chickens" element={<FriedChickens />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
