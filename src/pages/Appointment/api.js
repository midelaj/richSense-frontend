import { toast } from "react-toastify";
import { getToken } from "utils/storage";

export const fetchSlotAPI = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/slots`);
    const jsonResponse = await response.json();
    return jsonResponse.data;
  } catch (error) {
    toast.error("failed to fetch slot details");
  }
};

export const AppointmentCreate = async (appointments) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_HOST}/appointments`,
      {
        body: JSON.stringify(appointments),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    toast.error("failed to create appointment details");
  }
};

export const fetchAppointment = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_HOST}/appointments`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );

    const jsonResponse = await response.json();
    return jsonResponse.data;
  } catch (error) {
    toast.error("failed to fetch appointment details");
  }
};

export const fetchConfirmAppointmentAPI = async (id) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_HOST}/appointments/${id}`,
      {
        method: "put",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );

    const jsonResponse = await response.json();
    return jsonResponse.data;
  } catch (error) {
    toast.error("failed to fetch appointment details");
  }
};
