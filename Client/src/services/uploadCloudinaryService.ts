import axiosInstance from "../config/axiosInstance";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  genre: string;
  album: string;
}

const CLOUDNAME = "drwwbw0ih";
const UPLOADPRESET = "Amplify";

const handleUploadCloudinary = async (
  file: File,
  resourceType: string,
  formData: FormData,
): Promise<string | null> => {
  const { name, genre, album } = formData;
  const data = new FormData();

  data.append("file", file);
  data.append("upload_preset", UPLOADPRESET);
  data.append("public_id", name);
  data.append("tags", `g-${genre},a-${album},single`);

  try {
    const url = `v1_1/${CLOUDNAME}/${resourceType}/upload`;
    const response = await axiosInstance.post(url, data);
    toast.success(`${resourceType === "video" ? "Music" : "Cover"} Uploaded Successfully!`, {
      position: "top-right",
      duration: 4000,
    });
    return response.data.secure_url;
  } catch (error) {
    console.error(`Error uploading ${resourceType}:`, error);
    toast.error("Upload failed. Please try again.", {
      position: "top-right",
      duration: 4000,
    });
    return null;
  }
};

export default handleUploadCloudinary;
