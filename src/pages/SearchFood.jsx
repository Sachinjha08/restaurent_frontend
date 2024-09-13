import React, { useState } from "react";
import Data from '../menus/our-foods.json';

function SearchFood() {
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleItems, setVisibleItems] = useState(8);

    // Filter the data based on the search term
    const filteredData = Data.filter(item =>
        item.dsc.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Load more items, 8 at a time
    const loadMore = () => {
        setVisibleItems(prevItems => prevItems + 8);
    };

    return (
        <div className="container">
            <h1 className="title">Search Our BBQ Collection</h1>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search for BBQ..."
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setVisibleItems(8); // Reset visible items on a new search
                }}
                className="search-bar"
            />

            {/* Display results only when there is a search term */}
            {searchTerm && (
                <div>
                    <div className="card-grid">
                        {filteredData.slice(0, visibleItems).map((item, index) => (
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
                    {visibleItems < filteredData.length && (
                        <button onClick={loadMore} className="load-more-btn">
                            Load More
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchFood;
