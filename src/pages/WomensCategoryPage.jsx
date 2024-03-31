import React from "react";
import ProductCards from "../components/ProductCards";
import axios from "axios";
import { useParams } from "react-router-dom";
const WomensCategoryPage = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState(null);
  // const getProducts = async () => {
  //   const data = await axios.get(`/api/v1/products/get-product/${pid}`);
  //   // console.log(data.data.data.products);
  //   setProduct(data.data.data.products);
  // };

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `https://ecomm-backend-2qt2.onrender.com/api/v1/products/get-product/${pid}`
      );
      setProduct(response.data.data.products);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    getProducts();
    console.log("hello");
  }, [product]);
  return (
    <>
      <ProductCards product={product} />
    </>
  );
};

export default WomensCategoryPage;
