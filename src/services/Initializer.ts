import axios, { AxiosResponse } from "axios";
import { accessToken } from "../../global";

export const getUserInfoService = () => {
  const getUserInfo = (): Promise<AxiosResponse<any>> => {
    return axios.get("https://api.spotify.com/v1/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  return { getUserInfo };
};
