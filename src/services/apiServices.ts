import { CardInfo } from "@/components/addCard/CardWithForm";
import { BudgetCard } from "@/components/budgets/BudgetCard";
import { MerchantCard } from "@/components/marchent/MarchentCard";
import { TransactionCard } from "@/components/transaction/transactionCard/TransactionCard";
import axios from "axios";
import { getToken } from "./TokenService";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;

//for Accounts
export const addAccount = async (data: CardInfo) => {
  const add = await axios.post(`${baseUrl}/accounts/create`, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return add.data;
};

export const getAllAccounts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/accounts/getall`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }
};

//for Transaction

export const getAllTransaction = async () => {
  try {
    const response = await axios.get(`${baseUrl}/transaction/getAll`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }
};

export const addTransaction = async (data: TransactionCard) => {
  const add = await axios.post(`${baseUrl}/transaction/add`, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  console.log();
  return add.data;
};

//for merchants

export const addMerchant = async (data: MerchantCard) => {
  const add = await axios.post(`${baseUrl}/merchants/add`, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  console.log();
  return add.data;
};

export const getAllMerchants = async () => {
  try {
    const response = await axios.get(`${baseUrl}/merchants/getAll`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }
};

//for budgets
export const addBudget = async (data: BudgetCard) => {
  const add = await axios.post(`${baseUrl}/budget/addBudget`, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  console.log();
  return add.data;
};

export const getAllBudget = async () => {
  try {
    const response = await axios.get(`${baseUrl}/budget/getBudget`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }
};

export const deleteBudget = async (id: number) => {
  try {
    await axios.delete(`${baseUrl}/budget/deleteBudget/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  } catch (error) {
    console.error("Error deleting budget:", error);
    throw error;
  }
};

export const updateBudget = async (id: number, data: BudgetCard) => {
  try {
    const updatedBudget = await axios.put(`${baseUrl}/budget/updateBudget/${id}`, data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return updatedBudget.data;
  } catch (error) {
    console.error("Error updating budget:", error);
    throw error;
  }
};