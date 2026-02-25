"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { logout as logoutService } from "@/services/Auth";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const res = await logoutService();
    console.log(res?.success);
    if (res?.success) {
      router.push("/login");
      window.location.href = "/login";
      router.refresh(); // force re-check middleware
    }
    router.refresh(); // force re-check middleware
  }

  return <Button onClick={handleLogout}>Logout</Button>;
}
