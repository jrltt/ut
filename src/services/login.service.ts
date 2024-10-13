const baseURL = "https://uptime.com/api/v1/";

interface LoginProps {
  email: string;
  password: string;
}
export async function login({ email, password }: LoginProps) {
  return fetch(`${baseURL}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
}
