"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { logout as logoutService } from "@/services/Auth";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/logout`);

    localStorage.removeItem("auth");
    localStorage.removeItem("user");

    router.push("/login");
  };
  return <Button onClick={handleLogout}>Logout</Button>;
}
