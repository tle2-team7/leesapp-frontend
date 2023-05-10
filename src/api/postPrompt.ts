import { API_URL } from "./config";

export async function postPrompt(prompt: string) {
  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt,
    }),
  });
  const jsonData = await response.json();
  return jsonData;
}
