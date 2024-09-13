import React from 'react';

const img1 = "https://static3.businessinsider.com/image/51bb695369bedd8f2e000030-1698-1273/nan-thai-fine-dining-1.jpg?maxX=480&maxY=360";
const img2 = "https://content.jdmagicbox.com/comp/kolkata/98/033p9255798/catalogue/big-boss-restaurant-govinda-khatick-road-kolkata-restaurants-34jb7fu.jpg";
function About() {
    return (
        <div className="about-container">
            <div className="about-image">
                <img src={img2} alt={img1} />
            </div>
            <div className="about-content">
                <h1>Welcome to Our Restaurant</h1>
                <p>
                    At Restaurent Delicious Food, we believe in delivering a unique culinary experience. Nestled in the heart of Indore, our establishment offers a cozy ambiance combined with exquisite flavors from around the world.
                </p>
                <p>
                    Since 2024, we’ve been dedicated to sourcing the freshest ingredients, crafting creative dishes, and providing top-notch service. Whether you're dining with family, friends, or enjoying a romantic evening, we promise an unforgettable experience.
                </p>
                <p>
                    Our signature dishes are a fusion of tradition and innovation, with a menu that caters to every palate. Come savor the richness of Restaurent Delicious Food, where passion meets food.
                </p>
                <button className="reservation-btn">Make a Reservation</button>
            </div>
        </div>
    );
}

export default About;
