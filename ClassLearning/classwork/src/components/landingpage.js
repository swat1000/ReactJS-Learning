import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Landingpage.css'; // Import the custom CSS file

export default function LandingPage() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setProduct(response.data.products);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container'>
            {product.length !== 0 ? (
                product.map((element) => (
                    <div key={element.id}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={element.thumbnail} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{element.title}</h5>
                                <p className="card-text">{element.description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Rating: {element.rating}</li>
                                <li className="list-group-item">Price: {element.price}</li>
                            </ul>
                            <div className="card-body">
                            <button type="button" class="btn btn-primary mx-2">Add to Cart</button>
                            <button type="button" class="btn btn-primary">View Product</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>No Data Available</div>
            )}
        </div>
    );
}
