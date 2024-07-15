import { CardInfo } from '@/components/addCard/CardWithForm';
import axios from 'axios';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;


export const addAccount = async (data:CardInfo ) => {
  const add = await axios.post(`${baseUrl}/accounts/create`, data);
  return add.data;
};
