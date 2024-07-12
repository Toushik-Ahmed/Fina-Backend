// install axios
//add env varible for backend url
//write signup login function

import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;

type SignUpUser = {
  username: string;
  email: string;
  password: string;
};

type LogInUser = {
  email: string;
  password: string;
};

// Signup function
export const signUp = async function signUp(
  data: SignUpUser
): Promise<{ accessToken: string }> {
  const response = await axios.post(`${baseUrl}/signup`, data);
  return response.data;
};

// Login function
export const logIn = async function logIn(
  data: LogInUser
): Promise<{ accessToken: string }> {
  const response = await axios.post(`${baseUrl}/login`, data);
  return response.data;
};
