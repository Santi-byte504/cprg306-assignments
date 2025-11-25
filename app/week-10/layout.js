"use client";

import { AuthContextProvider } from "./context/AuthContext";

export default function Week10Layout({ children }) {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  );
}
