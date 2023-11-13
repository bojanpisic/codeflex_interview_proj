import { AxiosError } from "axios";
import { axios } from "lib/axios";
import { useNavigate } from "react-router-dom";
import { PATH_CONSTANTS } from "routes/pathConstants";
import storage from "utils/storage";

type LogInResponse = {
  token: string;
};

export const logIn = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<string> => {
  try {
    const { data } = await axios.post<LogInResponse>("/auth/login", {
      username,
      password,
    });

    return data.token;
  } catch (err) {
    throw new Error("Username or password is incorrect");
  }
};

export const logOut = () => {
  storage.clearToken("access_token");
};
