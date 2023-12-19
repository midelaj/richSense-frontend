import { getToken } from "utils/storage";



export const SignUp = async (user) => {
  const response = await fetch("http://localhost:5000/users", {
    method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type":"application/json",
    }
  });

  const jsonResponse = await response.json();

  return jsonResponse.data;
};


export const SignIN = async (user) => {
  const response = await fetch("http://localhost:5000/users/login", {
    method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type":"application/json",
    }
  });

  const jsonResponse = await response.json();

  return jsonResponse.data;
};

export const getCurrentUser = async (user) => {
  const response = await fetch("http://localhost:5000/users/current-user", {
    headers:
    {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`
    }
  });
  const jsonResponse = await response.json();
  return jsonResponse.data;
}
