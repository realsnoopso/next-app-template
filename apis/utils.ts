import { IncomingMessage } from "http";
import axios from "axios";

const API_BASE_URL = "https://api.example.com";

async function fetchApi<T, B = unknown>({
  path,
  method,
  body,
  req,
  options,
}: {
  path: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: B;
  req?: IncomingMessage;
  options?: Record<string, string>;
}): Promise<T> {
  try {
    const { data } = await axios({
      url: `${API_BASE_URL}${path}`,
      method,
      data: body,
      headers: options,
      withCredentials: true,
    });

    if (data?.response?.error) {
      return handleError<T>(
        data.response.name,
        data.response.message,
        data.response.statusCode
      );
    }
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(
        new Error(`Unexpected error is occurred: ${error.message}`)
      );
    }
    return Promise.reject(new Error("Unexpected error is occurred"));
  }
}

async function handleError<T>(
  name: string | undefined,
  errorMessage: string = "An error occurred",
  status: number | undefined
): Promise<T> {
  switch (status) {
    default:
      return Promise.reject(new Error(`${name}: ${errorMessage}`));
  }
}

export const api = {
  get: <T>({ path, req }: { path: string; req?: IncomingMessage }) =>
    fetchApi<T>({ path, method: "GET", req }),
  post: <T, B>({
    path,
    body,
    req,
    options,
  }: {
    path: string;
    body: B;
    req?: IncomingMessage;
    options?: Record<string, string>;
  }) => fetchApi<T, B>({ path, method: "POST", body, req, options }),
  put: <T, B>({
    path,
    body,
    req,
  }: {
    path: string;
    body: B;
    req?: IncomingMessage;
  }) => fetchApi<T, B>({ path, method: "PUT", body, req }),
  patch: <T, B>({
    path,
    body,
    req,
  }: {
    path: string;
    body: B;
    req?: IncomingMessage;
  }) => fetchApi<T, B>({ path, method: "PATCH", body, req }),
  delete: <T, B>({
    path,
    body,
    req,
  }: {
    path: string;
    body?: B;
    req?: IncomingMessage;
  }) => fetchApi<T, B>({ path, method: "DELETE", body, req }),
};
