export const CreateExpense = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_HOST}/expenses`,
      {
        body: JSON.stringify(),
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
