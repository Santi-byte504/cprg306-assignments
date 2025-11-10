"use client";

import Link from "next/link";
import { useUserAuth } from "./context/AuthContext";
import { useState } from "react";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [ active, setActive ] = useState(false);

  const handleLogin = async () => {
    try {
      setActive(true);
      await gitHubSignIn();
    } catch (error) {
      console.error("Sign-in failed. Please try again.",error);
    } finally{
        setActive(false);
    }
  };

  const handleLogout = async () => {
    try {
      setActive(true);
      await firebaseSignOut();
    } catch (error) {
      console.error("Sign-out failed. Please try again.",error);
    } finally{
        setActive(false);
    }
  };
    
  const displayName =
    user?.displayName ||
    user?.providerData?.[0]?.displayName ||
    (user?.email ? user.email.split("@")[0] : "");

  
  return (
    <main className="mt-10 align-text p-6 max-w-xl mx-auto bg-gray-900 rounded">
      <h1 className="font-bold text-3xl text-center mb-4">Week 9 - Login</h1>

      {!user ? (
        <div className="space-y-3 text-center">
          <p className="text-gray-600">Log in with GitHub to access your account.</p>
          <button
          onClick={handleLogin}
          disabled={active}
          className="bg-gray-800 rounded py-2 px-4 cursor-pointer hover:opacity-90">
          {active ? "Logging in." : "Log in with GitHub"}
          </button>
        </div>
      ) : (
        <div className="rounded text-center border space-y-4 p-4">
          
          <p>
            Welcome, <span className="font-semibold">{displayName}</span>
            {user?.email ? ` (${user.email})` : ""}
          </p>

          <div className="flex justify-center gap-3">
            <Link
              href="/week-9/shopping-list"
              className="rounded bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700">Go to Shopping List
            </Link>

            <button
              onClick={handleLogout}
              disabled={active}
              className= "bg-gray-800 rounded py-2 px-4 cursor-pointer hover:opacity-80">
              {active ? "Logging out." : "Log out"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
