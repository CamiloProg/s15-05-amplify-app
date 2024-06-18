import axios from "axios";

// Configuración de la instancia de Axios
const axiosInstance = axios.create({
  baseURL: "https://api.cloudinary.com/",
  headers: {
    Accept: "*/*",
    "Content-Type": "multipart/form-data",
  },
});

export default axiosInstance;
