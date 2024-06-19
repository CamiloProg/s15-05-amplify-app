import axios from "axios";

const convertUrlToFile = async (imageUrl: string): Promise<File | null> => {
  try {
    const response = await axios.get(imageUrl, { responseType: "blob" });

    if (response.status !== 200) {
      console.error(`Error fetching image: ${response.statusText}`);
      return null;
    }

    const filename = imageUrl.split("/").pop() ?? "image.jpg"; // Extract filename from URL or use default
    const fileType = response.headers["content-type"] ?? "image/jpeg"; // Get content type from response

    const file = new File([response.data], filename, { type: fileType });
    return file;
  } catch (error) {
    console.error("Error converting URL to File:", error);
    return null;
  }
};

export default convertUrlToFile;
