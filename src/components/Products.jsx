import React, {useEffect} from 'react';
import Product from "./Product.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../store/ProductsSlice.jsx";
import Loading from "./Loading.jsx";

function Products() {
    const  {products,loading} = useSelector(state => state.products);

    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getProducts());
    }, []);

    return (
        <div className="flex-row">
            {
                loading ? <Loading/> : products && products.map((product) => (
                    <Product key={product.id} product={product}/>
                ))
            }
        </div>
    );
}

export default Products;