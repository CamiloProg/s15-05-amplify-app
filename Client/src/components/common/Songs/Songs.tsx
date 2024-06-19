import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";

import CardSongs from "../CardSongs";
import { ImageData } from "../CardSongs/CardSongs.types";

const cloudinaryApiKey = "876211943356417";
const cloudinaryApiSecret = "nimSIMZaaWO5BfhyuuXASaxrwL0";

const Songs: React.FC = () => {
  const [imageData, setImageData] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Fetch the initial list of images
        const results = await fetch(`/api/v1_1/drwwbw0ih/resources/image/tags/single`, {
          headers: {
            Authorization: `Basic ${Buffer.from(cloudinaryApiKey + ":" + cloudinaryApiSecret).toString("base64")}`,
          },
        }).then((r) => r.json());

        console.log(results);

        const imageDetailsPromises = results.resources.map(
          async (resource: { asset_id: string; url: string }) => {
            // Fetch detailed information for each image using the asset_id
            const detailResponse = await fetch(
              `/api/v1_1/drwwbw0ih/resources/${resource.asset_id}`,
              {
                headers: {
                  Authorization: `Basic ${Buffer.from(cloudinaryApiKey + ":" + cloudinaryApiSecret).toString("base64")}`,
                },
              },
            ).then((r) => r.json());

            // Filter tags that start with 'g-' and remove the prefix
            const filteredTags = detailResponse.tags
              .filter((tag: string) => tag.startsWith("g-"))
              .map((tag: string) => tag.slice(2));

            return {
              url: resource.url,
              public_id: detailResponse.public_id,
              tags: filteredTags,
            };
          },
        );

        const detailedImageData = await Promise.all(imageDetailsPromises);
        setImageData(detailedImageData);
        console.log("Detailed Image Data:", detailedImageData);
      } catch (error) {
        console.error("Error fetching endpoint:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="w-full mb-4">
      <h2 className="text-3xl font-medium text-[#666666] ml-6 capitalize mb-4">
        Recientemente Añadido
      </h2>
      <div className="w-full flex items-center justify-start gap-4 flex-wrap">
        {imageData.map((data) => (
          <CardSongs
            key={data.public_id}
            tags={data.tags}
            public_id={data.public_id}
            url={data.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Songs;
