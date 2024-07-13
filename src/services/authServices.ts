// install axios
//add env varible for backend url
//write signup login function

import axios from "axios";
import { getToken } from "./TokenService";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;

export type SignUpUser = {
  username: string;
  email: string;
  password: string;
};

export type LogInUser = {
  email: string;
  password: string;
};

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

// Signup function
export const signUp = async (
  data: SignUpUser
): Promise<{ accessToken: string }> => {
  const response = await axios.post(`${baseUrl}/signup`, data);
  return response.data;
};

// Login function
export const logIn = async (
  data: LogInUser
): Promise<{ accessToken: string }> => {
  const response = await axios.post(`${baseUrl}/login`, data);
  return response.data;
};

export const getCurrentUserData = async (): Promise<User> => {
  const response = await axios.get(`${baseUrl}/getLoggedInUser`, {
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });
  return response.data;
};
