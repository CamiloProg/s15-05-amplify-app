import toast from "react-hot-toast";
import { Buffer } from "buffer";

const handleGetCloudinary = async (resourceType: string): Promise<any> => {
  try {
    const cloudinaryApiKey = "876211943356417";
    const cloudinaryApiSecret = "nimSIMZaaWO5BfhyuuXASaxrwL0";

    if (!cloudinaryApiKey || !cloudinaryApiSecret) {
      throw new Error("Cloudinary API key or secret not found in environment variables");
    }

    const credentials = `${cloudinaryApiKey}:${cloudinaryApiSecret}`;
    const encodedCredentials = Buffer.from(credentials).toString("base64");

    const fetchImages = async () => {
      try {
        const response = await fetch("/api/v1_1/drwwbw0ih/resources/image/tags/single", {
          headers: {
            Authorization: `Basic ${encodedCredentials}`,
          },
        });

        console.log("Response Status:", response.status);
        console.log("Response Headers:", response.headers);

        // Check for non-200 status codes
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const textResponse = await response.text();
        console.log("Response Text:", textResponse);

        // Try to parse the JSON response
        try {
          const results = JSON.parse(textResponse);
          console.log("Parsed Results:", results);
          return results;
        } catch (parseError) {
          console.error("Error parsing JSON:", parseError);
          throw new Error("Failed to parse JSON response");
        }
      } catch (error) {
        console.error("Error fetching endpoint:", error);
        throw error;
      }
    };

    const results = await fetchImages();

    // Process and return results
    const { resources } = results;
    console.log(resources);
    return resources;
  } catch (error) {
    console.error(`Error fetching ${resourceType} data:`, error);
    toast.error("Fetch failed. Please try again.", {
      position: "top-right",
      duration: 4000,
    });
    return null;
  }
};

export default handleGetCloudinary;
