"use client";

import { login } from "@/services/Auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // try {
    const res = await login({ email, password });
    console.log(res.success);
    if (!res?.success) {
      setError("Invalid email or password");
      return;
    }

    toast.success("Login successful");
    router.push("/dashboard");
    router.refresh();
    // } catch (error) {
    //   setError("Something went wrong. Please try again.");
    // } finally {
    //   setLoading(false);
    // }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] px-4 border border-[#f1f1f1]">
      <div className="w-full max-w-sm">
        {/* Header */}
        <h1 className="text-3xl font-semibold text-[#FFC857] text-center mb-6">
          Login
        </h1>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-md bg-[#1E1E1E] border border-[#FFC857]/50 px-3 py-2 text-gray-100 placeholder-[#FFC857]/70 focus:outline-none focus:ring-2 focus:ring-[#FFC857]/50 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1">Password</label>
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full rounded-md bg-[#1E1E1E] border border-[#FFC857]/50 px-3 py-2 text-gray-100 placeholder-[#FFC857]/70 focus:outline-none focus:ring-2 focus:ring-[#FFC857]/50 transition"
            />
          </div>

          {/* Error */}
          {error && <p className="text-red-400 text-sm">{error}</p>}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FFC857] hover:bg-[#FFB740] transition-colors text-black py-2 rounded-md font-medium"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-400">
          © {year} Hossain Rabbi Portfolio
        </p>
      </div>
    </div>
  );
}
