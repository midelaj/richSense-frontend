import { toast } from "react-toastify";
import { getToken } from "utils/storage";

export const createExpense = async (expense) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/expenses`, {
      body: JSON.stringify(expense),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    toast.error("failed to create appointment details");
  }
};
