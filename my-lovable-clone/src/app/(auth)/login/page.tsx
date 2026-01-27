"use client";

import { supabase } from "<@>/lib/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithEmail = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!error) router.push("/dashboard");
  };

  const signUpWithEmail = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (!error) alert("Check your email for verification");
  };

  const signInWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="p-6 max-w-sm mx-auto space-y-4">
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full"
      />

      <button onClick={signInWithEmail} className="w-full bg-black text-white p-2">
        Sign In
      </button>

      <button onClick={signUpWithEmail} className="w-full border p-2">
        Sign Up
      </button>

      <button onClick={signInWithGithub} className="w-full bg-gray-800 text-white p-2">
        Continue with GitHub
      </button>
    </div>
  );
}
