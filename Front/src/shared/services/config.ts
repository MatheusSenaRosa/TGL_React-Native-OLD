import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.156:3333/",
});

api.interceptors.request.use(async (config) => {
  // Do something before request is sent

  const isToken = await AsyncStorage.getItem("@token");

  if (isToken && config.headers) {
    config.headers["Authorization"] = `Bearer ${isToken}`;
    config.headers["Content-Type"] = `application/json`;
    config.headers["Accept"] = "application/json";
  } else if (config.headers) {
    config.headers["Content-Type"] = `application/json`;
    config.headers["Accept"] = "application/json";
  }
  return config;
});

export default api;
