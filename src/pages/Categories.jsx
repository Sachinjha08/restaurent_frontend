import React from 'react';
import { NavLink } from 'react-router-dom';

const img1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnF68I-kkEYZfXl6fFcsYiNALxmcDXO1mSSQ&s'; //bbqs
const img2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr8peJYVCNq1tNAhW1qyvWnQoFdULiLBnUzZZHk1XkqUhZoc3omvbWJnZr1_bq5RSDS6g&usqp=CAU'; //burgers
const img3 = 'https://t3.ftcdn.net/jpg/00/96/19/86/360_F_96198695_oyJg0I7ELpXI6608FI942PX9LlRRyEnd.jpg'; //desserts
const img4 = 'https://static.vecteezy.com/system/resources/thumbnails/028/245/812/small_2x/exquisite-close-upgraph-of-cocktails-assortment-served-on-dark-background-generative-ai-photo.jpg'; //drinks
const img5 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOcZkarFgcJf8GnZsDkF2zJq6riQBrbO62g&s'; //fried-checkens
const img6 = 'https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_640.jpg'; //pizzas
const img7 = 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/8/22/0/FN_sandwich-thinkstock_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1377774909150.jpeg'; //sandwiches

function Categories() {
    return (
        <div className="gallery-container">
            <h1>Food Categories</h1>
            <div className="gallery-grid">
                <div className="gallery-item">
                    <NavLink to="/bbqs">
                        <img src={img1} alt="Barbeques" />
                        <div className="overlay">Barbeques</div>
                    </NavLink>
                </div>
                <div className="gallery-item">
                    <NavLink to="/burgers">
                        <img src={img2} alt="Burgers" />
                        <div className="overlay">Burgers</div>
                    </NavLink>
                </div>
                <div className="gallery-item">
                    <NavLink to="/desserts">
                        <img src={img3} alt="Desserts" />
                        <div className="overlay">Desserts</div>
                    </NavLink>
                </div>
                <div className="gallery-item">
                    <NavLink to="/drinks">
                        <img src={img4} alt="Drinks" />
                        <div className="overlay">Drinks</div>
                    </NavLink>
                </div>
                <div className="gallery-item">
                    <NavLink to="/fried-chickens">
                        <img src={img5} alt="Fried Chickens" />
                        <div className="overlay">Fried Chickens</div>
                    </NavLink>
                </div>
                <div className="gallery-item">
                    <NavLink to="/pizzas">
                        <img src={img6} alt="Pizza's" />
                        <div className="overlay">Pizza's</div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Categories;
