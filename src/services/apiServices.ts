import { CardInfo } from '@/components/addCard/CardWithForm';
import axios from 'axios';
import { getToken } from './TokenService';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;

export const addAccount = async (data: CardInfo) => {
  const add = await axios.post(`${baseUrl}/accounts/create`, data,{

    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return add.data;
};
