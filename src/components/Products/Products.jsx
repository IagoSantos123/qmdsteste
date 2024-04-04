import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

// images import
import Img1 from "../../assets/product/pontanegra.jpg";
import Img2 from "../../assets/product/pipa2.jpg";
import Img3 from "../../assets/product/portodegalinhas.jpg";
import Img4 from "../../assets/product/maragogi.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Ponta Negra - RN",
    price: "13 e 14 de Abril",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Pipa - RN",
    price: "04 e 05 de Maio",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Porto de Galinhas - PE",
    price: "18 e 19 de Maio",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Maragogi - AL",
    price: "25 e 26 de Maio",
    aosDelay: "600",
  },
];

//apagar essa constante
const ProductsData2 = [
  
];
const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Todas as viagens"  />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
