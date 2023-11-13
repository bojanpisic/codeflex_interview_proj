import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import storage from "utils/storage";

// const API_URL = process.env.REACT_APP_API_BASE_URL;
const API_URL = "https://fakestoreapi.com";

export const axios = Axios.create({
  baseURL: API_URL,
});

const onRequest = (config: AxiosRequestConfig): any => {
  const token = storage.getToken("access_token");
  config.headers = config.headers ?? {};

  if (token) {
    config.headers.authorization = `${token}`;
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => response;
const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (error.response?.status === 401) {
    //redirect to login
  }

  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};
axios.interceptors.request.use(onRequest, onRequestError);
axios.interceptors.response.use(onResponse, onResponseError);
