import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../store/ProductInfoSlice.jsx";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading.jsx";

function ProductInfo() {
    const { product, loading } = useSelector(state => state.productInfo);
    const { id, title, image, description, price, category, rating } = product || {};
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductById(params.id));
    }, [dispatch, params.id]);

    return (
        <div className="product-container">
            {loading ? (
                <Loading/>
            ) : (
                <div className="product-details">
                    <h2 className="product-title">{title}</h2>
                    <img className="product-image" src={image} alt={title} />
                    <p className="product-description">{description}</p>
                    <p className="product-price">Price: ${price}</p>
                    <p className="product-category">Category: {category}</p>
                    <div className="product-rating">
                        <span>Rating: {rating?.rate} / 5</span>
                        <span>({rating?.count} reviews)</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductInfo;
