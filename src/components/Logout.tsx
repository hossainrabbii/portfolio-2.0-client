"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/logout`, {
      method: "POST",
      credentials: "include",
    });

    router.push("/login");
  }

  return <button onClick={logout}>Logout</button>;
}
