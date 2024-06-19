import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";

const Songs: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchEndpoint = async () => {
      try {
        const results = await fetch(`/api/v1_1/drwwbw0ih/resources/image/tags/single`, {
          headers: {
            Authorization: `Basic ${Buffer.from(import.meta.env.VITE_CLOUDINARY_API_KEY + ":" + import.meta.env.VITE_CLOUDINARY_API_SECRET).toString("base64")}`,
          },
        }).then((r) => r.json());

        const urls = results.resources.map((resource: { url: string }) => resource.url);
        setImageUrls(urls);
        console.log("Endpoint data:", urls);
      } catch (error) {
        console.error("Error fetching endpoint:", error);
      }
    };

    fetchEndpoint();
  }, []);

  return (
    <div>
      <h2>Endpoint Fetcher</h2>
      <p>Abre la consola del navegador para ver la respuesta del endpoint.</p>
      <div>
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Fetched from Cloudinary ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Songs;
