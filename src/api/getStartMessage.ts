import { API_URL } from "./config";
export async function getStartMessage() {
  const response = await fetch(`${API_URL}/start`);
  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData;
}
