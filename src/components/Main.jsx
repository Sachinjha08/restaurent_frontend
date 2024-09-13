import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Reservation from '../pages/Reservation'
import Categories from '../pages/Categories'
import SearchFood from '../pages/SearchFood'
import Reviews from '../pages/Reviews'

const Main = () => {
    return (
        <div>
            <Home />
            <About />
            <Categories />
            <SearchFood />
            <Reservation />
            <Reviews />
        </div>
    )
}

export default Main