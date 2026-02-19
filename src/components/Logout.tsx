"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/logout`, {
      method: "POST",
      credentials: "include",
    });

    router.push("/login");
  }

  return <Button onClick={logout}>Logout</Button>;
}
