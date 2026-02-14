"use client";

import { login } from "@/services/Auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const email = (form.email as HTMLInputElement).value;
    const password = (form.password as HTMLInputElement).value;

    const res = await login({ email, password });

    setLoading(false);
    console.log(res);

    if (!res?.success) {
      setError("Invalid email or password");
      return;
    }
    if (res.success) {
      router.push("/dashboard");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] px-4">
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
          © {new Date().getFullYear()} Your App
        </p>
      </div>
    </div>
  );
}
