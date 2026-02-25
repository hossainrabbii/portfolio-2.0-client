export const login = async (data: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // 🔥 REQUIRED
    body: JSON.stringify(data),
  });

  const result = await res.json();
  return result;
};

export const logout = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/logout`, {
    method: "POST",
    credentials: "include", // ❗ important for httpOnly cookies
  });
  return await res.json();
};
