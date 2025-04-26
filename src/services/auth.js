import { apiClient } from "./config";

export const apiSignup = async (payload) => {
    return apiClient.post("/users/register", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };