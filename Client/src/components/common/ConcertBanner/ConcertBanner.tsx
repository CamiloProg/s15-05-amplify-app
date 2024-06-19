import React from "react"; // Asegúrate de ajustar la importación del botón según tu estructura de proyecto
import { buttonVariants } from "../shadcn/button";
import { ConcertBannerProps } from "./ConcertBanner.types";
import { Link } from "react-router-dom";

const ConcertBanner: React.FC<ConcertBannerProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="relative h-72 overflow-hidden shadow-md shadow-[#0A2D47] mb-4">
      <div className="absolute inset-0 bg-[#0A2D47] mix-blend-multiply"></div>
      <div
        className="absolute inset-0 flex items-center justify-center
         text-white text-center z-10"
      >
        <div>
          <h1 className="lg:text-4xl text-3xl font-bold">{title}</h1>
          <h4 className="text-lg mb-4">{description}</h4>
          <Link
            to={onButtonClick}
            target="_blank"
            className={buttonVariants({ variant: "secondary" })}
          >
            {buttonText}
          </Link>
        </div>
      </div>
      <img className="object-cover w-full" src={imageUrl} alt="Concierto" />
    </div>
  );
};

export default ConcertBanner;
