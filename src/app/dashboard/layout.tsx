"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (!auth) {
      router.replace("/login"); // redirect if not auth
    } else {
      setAuthChecked(true); // allow rendering
    }
  }, [router]);

  if (!authChecked) {
    return <div>Loading...</div>; // or spinner
  }

  return <>{children}</>;
}
