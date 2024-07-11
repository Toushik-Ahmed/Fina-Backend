// install axios
//add env varible for backend url
//write signup login function

import axios from 'axios';

const baseUrl = process.env.BASE_URI;

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
export const signUp = async function signUp(data: SignUpUser) {
  try {
    const response = await axios.post(`${baseUrl}/signup`, data);
    console.log(response.data);
  } catch (error) {
    console.error('Error signing up:', error);
  }
};

// Login function
export const logIn = async function logIn(data: LogInUser) {
  try {
    const response = await axios.post(`${baseUrl}/login`, data);
    console.log(response.data);
  } catch (error) {
    console.error('Error logging in:', error);
  }
};
