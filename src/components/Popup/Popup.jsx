import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../Shared/Button";

const Popup = ({ orderPopup, handleOrderPopup }) => {
  const [deliveryOption, setDeliveryOption] = useState('delivery');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleOrder = () => {
    // Aqui você pode adicionar a lógica para processar o pedido
    console.log('Pedido:', { name, email, address, deliveryOption });
  };

  return (
    <>
      {orderPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl">
              {/* Header secton */}
              <div className="flex items-center justify-between">
                <h1>Procurar passagem</h1>
                <div>
                  <IoCloseOutline
                    onClick={handleOrderPopup}
                    className="text-2xl cursor-pointer"
                  />
                </div>
              </div>

              {/* Form secton */}
              <div className="mt-4">
                <input type="Destino" placeholder="Destino" className="form-input" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="Mês" placeholder="Mês" className="form-input" value={name} onChange={(e) => setName(e.target.value)} />
          
                <div className="flex justify-center">
                  <label>
                    <input type="radio" name="deliveryOption" value="delivery" checked={deliveryOption === 'delivery'} onChange={() => setDeliveryOption('delivery')} />
                    Bate-Volta
                  </label>
                  <label>
                    <input type="radio" name="deliveryOption" value="pickup" checked={deliveryOption === 'pickup'} onChange={() => setDeliveryOption('pickup')} />
                    Hospedagem
                  </label>
                </div>

                <div className="flex justify-center mt-4">
                  <Button text="Procurar" bgColor={"bg-primary"} textColor={"text-white"} onClick={handleOrder} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;