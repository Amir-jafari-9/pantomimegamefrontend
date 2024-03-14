"use server";
export default async function PostData(postData: any) {
  const res = await fetch("http://localhost:8000/api/v1/games/new-game", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  if (!res.ok) {
    throw new Error("Failed to send data");
  }
  return res.json();
}