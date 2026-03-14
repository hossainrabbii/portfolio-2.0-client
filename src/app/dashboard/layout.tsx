"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2Icon } from "lucide-react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

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
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    ); // or spinner
  }

  return <>{children}</>;
}
