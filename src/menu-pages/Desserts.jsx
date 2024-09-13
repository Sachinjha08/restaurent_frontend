import React from 'react';
import { useState } from "react";
import Data from '../menus/desserts.json';


function Desserts() {
    const [visibleItems, setVisibleItems] = useState(8);

    const loadMore = () => {
        setVisibleItems(prevItems => prevItems + 8);
    }

    return (
        <div className="container">
            <h1 className='Title'>This Week Top Lists</h1>
            <div className="card-grid">
                {Data.slice(0, visibleItems).map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.img} alt={item.name} className="card-image" />
                        <div className="card-details">
                            <h2>{item.name}</h2>
                            <p>{item.dsc}</p>
                            <p><strong>Price:</strong> ${item.price}</p>
                            <p><strong>Rating:</strong> {item.rate} ★</p>
                            <p><strong>Location:</strong> {item.country}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {visibleItems < Data.length && (
                <button onClick={loadMore} className="load-more">
                    Load More
                </button>
            )}
        </div>
    );
}

export default Desserts;
