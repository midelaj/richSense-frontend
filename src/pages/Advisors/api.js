import { toast } from "react-toastify";

export const fetchAdvisorAPI = async (id) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_HOST}/advisors/${id}`
    );

    const jsonResponse = await response.json();
    return jsonResponse.data;
  } catch (error) {
    toast.error("failed to fetch advisor details");
  }
};
export const fetchAdvisorAppointmentAPI = async (id, { date }) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_HOST}/advisors/${id}/appointments?date=${date}`
    );

    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    toast.error("failed to fetch advisor Appointment");
  }
};
