// pages/songs.tsx

import React, { useEffect } from "react";

import handleGetCloudinary from "../../../services/getCloudinarySongs"; // Ajusta la ruta según donde tengas tu función

type ImageResource = {
  id: string;
  title: string;
  image: string;
  width: number;
  height: number;
};

const Songs: React.FC<{ images?: ImageResource[] }> = ({ images = [] }) => {
  useEffect(() => {
    // Llama a la función handleGetCloudinary al montar el componente
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await handleGetCloudinary("image");

      if (!data || !data.resources) {
        throw new Error("No valid data received from Cloudinary");
      }

      const images = data.resources.map((resource: any) => ({
        id: resource.asset_id,
        title: resource.public_id,
        image: resource.secure_url,
        width: resource.width,
        height: resource.height,
      }));

      console.log(images); // Verify that images are correctly parsed

      // Update state or perform actions with the images here
    } catch (error) {
      console.error("Error handling data from Cloudinary:", error);
    }
  };

  if (images.length === 0) {
    return (
      <div>
        <h3 className="text-3xl font-medium text-[#666666] ml-10">Canciones</h3>
        <p>No se encontraron imágenes</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-3xl font-medium text-[#666666] ml-10">Canciones</h3>
      <div className="gap-1 flex">
        {images.map((image) => {
          return (
            <li key={image.id}>
              <a rel="noreferrer">
                <div>
                  <img width={image.width} height={image.height} src={image.image} alt="" />
                </div>
                <h3>{image.title}</h3>
              </a>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Songs;
