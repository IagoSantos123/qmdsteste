import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Partners from "./components/Partners/Partners.jsx";

import logo from "./assets/category/logoqueimadas.png";
import onibus from "./assets/category/onibus2.png";

import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "Faça sua reserva",
  title: "Viagem conosco",
  date: "",
  title2: "",
  title3: "Queimadas Tour",
  title4:
    "Fundada em 2019 por dois estudantes adolescentes ávidos por escapar da rotina escolar, a Queimadas Tour rapidamente se estabeleceu como uma paixão por explorar novos destinos. Apesar da pausa imposta pela pandemia em 2020, logo retomamos nossas atividades após as flexibilizações. Nos anos seguintes, fomos honrados com o título de melhor agência de excursões em votações online consecutivas de 2022 a 2024. Esse reconhecimento é um reflexo direto do trabalho árduo de nossa equipe de 10 profissionais dedicados, que se esforçam diariamente para garantir o pleno funcionamento da agência. Hoje, a Queimadas Tour é sinônimo de atendimento \nqualificado, oferecendo aos nossos clientes não apenas conforto e segurança, mas também uma experiência de atendimento excepcional. Estamos comprometidos em continuar sendo uma referência no setor, proporcionando viagens inesquecíveis e momentos extraordinários aos nossos clientes.",
  bgColor: "#9eadb7",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Na sua viagem",
  date: "14 Jan to 28 Jan",
  image: onibus,
  title2: "Viagem com segurança",
  title3: "Saiba mais",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#fc6203",
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default App;