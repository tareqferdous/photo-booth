import axios from "axios";
import { useEffect } from "react";
import { api } from "../api";
import { useAuth } from "./useAuth";
import { usePopup } from "./usePopup";

const useAxios = () => {
  const { auth, setAuth } = useAuth();
  const { setPopup } = usePopup();

  useEffect(() => {
    // add a request interceptor
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const accessToken = auth?.accessToken;
        console.log("Access Token:", accessToken);
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // add a response interceptor
    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = auth?.refreshToken;
            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
              {
                refreshToken,
              }
            );
            const { accessToken } = response.data;
            console.log(`New Token: ${accessToken}`);
            setAuth({ ...auth, accessToken });

            // Retry the original request with the new token
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return axios(originalRequest);
          } catch (error) {
            console.error("Refresh token expired or invalid", error);
            setAuth(null);
            setPopup("session-expired"); // popup trigger
          }
        }
        return Promise.reject(error);
      }
    );
    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [auth?.accessToken, auth?.refreshToken, setAuth, setPopup]);
  return { api };
};

export default useAxios;
