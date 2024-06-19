import React from "react";
import { CloudUpload } from "lucide-react";

const WelcomeMessage: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <CloudUpload className="text-white mb-2" size={32} />
      <h3 className="font-medium text-lg text-white text-center">
        Hola, ¡Bienvenido a <span className="font-semibold">Amplify</span>!
      </h3>
      <p className="text-gray-500 text-center">Comienza a subir tus canciones aquí mismo.</p>
    </div>
  );
};

export default WelcomeMessage;
