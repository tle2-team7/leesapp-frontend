import { API_URL } from "./config";
export async function getStartMessage() {
  try {
    const response = await fetch(`${API_URL}/start`, {
      method: "GET",
    });
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
}
