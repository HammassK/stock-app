import authStorage from "../auth/useAuth";
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

apiClient.interceptors.request.use(
  async (config) => {
    try {
      if (typeof window !== "undefined") {
        const authToken = await authStorage.getToken();
        if (authToken) {
          config.headers["Authorization"] = `Bearer ${authToken}`;
        }
      }
      config.headers["ngrok-skip-browser-warning"] = "69420";
    } catch (error) {
      console.error("Error in request interceptor:", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
