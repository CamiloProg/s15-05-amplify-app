// pages/songs.tsx

import React, { useEffect } from "react";
import { Buffer } from "buffer";


export async function getStaticProps() {
  try {
    const cloudinaryApiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
    const cloudinaryApiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET;

    if (!cloudinaryApiKey || !cloudinaryApiSecret) {
      throw new Error("Cloudinary API key or secret not found in environment variables");
    }

    const response = await fetch(`https://api.cloudinary.com/v1_1/drwwbw0ih/resources/image`, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${cloudinaryApiKey}:${cloudinaryApiSecret}`).toString("base64")}`,
      },
    }).then((r) => r.json());

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from Cloudinary: ${response.status} ${response.statusText}`,
      );
    }

    const results = await response.json();
    console.log(results); // Verifica que aquí esté imprimiendo algo

    const { resources } = results;

    const images = resources.map((resource: any) => ({
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width: resource.width,
      height: resource.height,
    }));

    return {
      props: {
        images,
      },
    };
  } catch (error) {
    console.error("Error fetching data from Cloudinary:", error);

    return {
      props: {
        images: [],
      },
    };
  }
}

type ImageResource = {
  id: string;
  title: string;
  image: string;
  width: number;
  height: number;
};

const Songs: React.FC<{ images?: ImageResource[] }> = ({ images = [] }) => {
  useEffect(() => {
    // Llama a getStaticProps al montar el componente
    getStaticProps();
  }, []);

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
