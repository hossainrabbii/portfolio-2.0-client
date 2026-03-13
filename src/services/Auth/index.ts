export const login = async (data: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const logout = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/logout`, {
    method: "POST",
    credentials: "include", // ❗ important for httpOnly cookies
  });

  return await res.json();
};
