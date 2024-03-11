import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

// images import
import Img1 from "../../assets/product/imgq.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "bate/volta pipa",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    
    title: "Viagem com Hospedagem Pipa",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    
    title: "Viagem cachoeira",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    
    title: "Aparecida ",
    price: "220",
    aosDelay: "600",
  },
];
const ProductsData2 = [
  {
    id: 1,
    
    title: "João Pessoa",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    
    title: "Beto Carreiro",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    
    title: "Maragogi",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    
    title: "maceio ",
    price: "220",
    aosDelay: "600",
  },
];
const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
