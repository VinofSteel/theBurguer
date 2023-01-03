import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export interface iAxiosResponse<T = never>  {
    data: any;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    config: AxiosRequestConfig<T>;
    request?: any;
}

export interface iAxiosError {
    config: AxiosRequestConfig;
    code?: string;
    request?: any;
    response?: iAxiosResponse;
    isAxiosError: boolean;
    toJSON: () => object;
  }
  
export const api: AxiosInstance = axios.create({
    baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com",
    timeout: 5000,
    headers: {"Content-Type": "application/json"}
})