
import toast from "react-hot-toast";


const handleGetCloudinary = async (
  resourceType: string,
): Promise<any> => {
  try {

    const cloudinaryApiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
    const cloudinaryApiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET;

    if (!cloudinaryApiKey || !cloudinaryApiSecret) {
      throw new Error("Cloudinary API key or secret not found in environment variables");
    }

    const credentials = `${cloudinaryApiKey}:${cloudinaryApiSecret}`;
    const encodedCredentials = btoa(credentials); // Encode credentials using btoa

    const response = await fetch(`/v1_1/drwwbw0ih/resources/image`, {
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
      },
    }).then(r => r.json());
    console.log(response);
    
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from Cloudinary: ${response.status} ${response.statusText}`,
      );
    }

    const results = await response.json();

    const { resources } = results;
    console.log(resources);
    
  }
   catch (error) {
    console.error(`Error fetching ${resourceType} data:`, error);
    toast.error("Fetch failed. Please try again.", {
      position: "top-right",
      duration: 4000,
    });
    return null;
  }
};

export default handleGetCloudinary;
