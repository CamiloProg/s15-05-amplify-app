import { useState, useEffect } from "react";
import LoginDialog from "../Auth/ingress/Ingress";
import Register from "../Auth/register";
import tracksData from "../../../data/banner.json"; // Importa el JSON

const Carousel: React.FC = () => {
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const openRegister = () => {
    setRegisterOpen(true);
    setLoginOpen(false);
  };

  const openLogin = () => {
    setRegisterOpen(false);
    setLoginOpen(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % tracksData.images.length);
        setIsFadingOut(false);
      }, 500); 
    }, 8000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full text-center mx-auto mb-10">
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        {tracksData.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? (isFadingOut ? 'opacity-0' : 'opacity-100') : 'opacity-0'
            }`}
            style={{ transition: 'opacity 0.5s ease-in-out' }}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex justify-center items-center flex-col">
        <div className="absolute inset-0 bg-[#9D174D] mix-blend-multiply"></div>
        <h3 className="font-normal text-white md:text-7xl text-4xl z-10">Amplify yourself</h3>
        <div className="flex justify-center gap-2 items-center mt-5 z-10">
          {/* Botón Inicio sesión */}
          <button className="text-white border rounded py-2 px-5" onClick={openLogin}>
            Descubir
          </button>
          <LoginDialog
            openLogin={isLoginOpen}
            onClose={() => setLoginOpen(false)}
            handleRegister={openRegister}
          />

          {/* Botón Registrarse */}
          <button className="text-black bg-white rounded py-2 px-5" onClick={openRegister}>
            Subir Música
          </button>
          <Register
            openLogin={isRegisterOpen}
            onClose={() => setRegisterOpen(false)}
            handleLogin={openLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;