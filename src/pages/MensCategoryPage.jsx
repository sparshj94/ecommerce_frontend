import React, { useState, useEffect } from "react";
import FeaturedProductList from "../components/FeaturedProductList";
import axios from "axios";
import ProductCards from "../components/ProductCards";
import CategoryNavigation from "../components/CategoryNavigation";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
const MensCategoryPage = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState();
  const getProducts = async () => {
    const data = await axios.get(
      `https://ecomm-backend-2qt2.onrender.com/api/v1/products/get-product/${pid}`
    );
    // console.log(data.data.data.products);
    setProduct(data?.data?.data?.products);
  };
  // getProducts();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <ProductCards product={product} />
      <Footer />
    </>
  );
};

export default MensCategoryPage;
