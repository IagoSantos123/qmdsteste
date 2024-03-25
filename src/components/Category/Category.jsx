import React from "react";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Button";

import Img1 from "../../assets/product/pontanegra.jpg";
import Img2 from "../../assets/product/pipa2.jpg";
import Img3 from "../../assets/product/portodegalinhas.jpg";
import Img4 from "../../assets/product/maragogi.jpg";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end" style={{backgroundImage: `url(${Img1})`}}>
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400"></p>
                <p className="text-2xl font-semibold mb-[2px]">Ponta Negra - RN</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  
                </p>
                <Button
                  text="Saiba mais"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img  alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end" style={{backgroundImage: `url(${Img2})`}}>
            <div>
              <div className="mb-4" style={{ color: "#FC6203" }}>
                <p className="mb-[2px]"></p>
                <p className="text-2xl font-semibold mb-[2px]">Pipa - RN</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  
                </p>
                <Button
                  text="Saiba mais"
                  bgColor={"bg-white"}
                  textColor={"text-fc6203"}
                />
              </div>
              </div>
            <img  alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end" style={{backgroundImage: `url(${Img3})`}}>
            <div>
              <div className="mb-4" style={{ color: "#FC6203" }}>
                <p className="mb-[2px]"></p>
                <p className="text-2xl font-semibold mb-[2px]">Porto de Galinhas - PE</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  
                </p>
                <Button
                  text="Saiba mais"
                  bgColor={"bg-white"}
                  textColor={"text-fc6203"}
                />
              </div>
              </div>
            <img  alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end" style={{backgroundImage: `url(${Img4})`}}>
            <div>
              <div className="mb-4" style={{ color: "#FC6203" }}>
                <p className="mb-[2px]"></p>
                <p className="text-2xl font-semibold mb-[2px]">Maragogi - AL</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  
                </p>
                <Button
                  text="Saiba mais"
                  bgColor={"bg-white"}
                  textColor={"text-fc6203"}
                />
              </div>
            </div>
            
            <img
              
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
