import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAProduct } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = ({image,title,description,action}) => {
    useEffect(() => {
        dispatch(getAProduct(id));
      }, []);
    const { id } = useParams();

    const dispatch = useDispatch();
    const selectedProduct = useSelector(
      (state) => state.allProducts.selectedProduct
    );
  
    console.log("selectedProduct",selectedProduct);
    return (
        <div>
            <img src={selectedProduct.image}/>
            <h1>{selectedProduct.title}</h1>
            <p>{selectedProduct.description}</p>
            <button onClick={action}>افزودن به سبد خرید</button>
        </div>
    )
}

export default ProductDetail
