import React from "react";
import './product.css'
import Image from "../peorudctImage/image.component";

const productData = {
    "id": 9,
    "title": "Infinix INBOOK",
    "description": "Infinix Inbook X1 Ci3 10th 8GB...",
    "price": 1099,
    "discountPercentage": 11.83,
    "rating": 4.54,
    "stock": 96,
    "brand": "Infinix",
    "category": "laptops",
    "thumbnail": "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
    "images": [
        "https://dummyjson.com/image/i/products/9/1.jpg",
        "https://dummyjson.com/image/i/products/9/2.png",
        "https://dummyjson.com/image/i/products/9/3.png",
        "https://dummyjson.com/image/i/products/9/4.jpg",
        "https://dummyjson.com/image/i/products/9/thumbnail.jpg"
    ]
};

const Card = ({ title, image, children }) => {
    return (<div className="card">
        <div className="card-title">
            <h3>{title}</h3>
        </div>
        <div className="card-body">
            <div className="card-img">
                {image}
            </div>
            <div className="cotent">
                <p>{children}</p>
            </div>
        </div>
    </div>)
}

const Product = () => {
    return (
        <Card title={productData.title}
            image={
                <Image source={productData.thumbnail}
                    classes="test"
                    alt={productData.title} />
            }
        >
            {productData.description}
        </Card>
    )
}

export default Product;