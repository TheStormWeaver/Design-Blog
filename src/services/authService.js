const baseUrl = "http://localhost:3030";

export async function Register(email, password) {
  const res = await fetch(`${baseUrl}/users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password}),
  });

  const result = await res.json();

  if (res.ok) {
    return result;
  } else {
    return result.code;
  }
}

export async function Login(email, password) {
  const res = await fetch(`${baseUrl}/users/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const result = await res.json();

  if (res.ok) {
    return result;
  } else {
    return result.code;
  }
}

export function Logout(token) {
  return fetch(`${baseUrl}/users/logout`, {
    headers: { "X-Authorization": token },
  });
}
