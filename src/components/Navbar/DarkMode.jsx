import React from "react";

const DarkMode = () => {
  // Sem estado necessário, pois o tema é definido diretamente no HTML
  React.useEffect(() => {
    document.documentElement.classList.add("dark"); // Sempre aplicando o tema escuro
    localStorage.setItem("theme", "dark"); // Garantindo que o tema seja sempre definido como escuro
  }, []);

  return null; // Retornando null para não renderizar nenhum elemento
};

export default DarkMode;
