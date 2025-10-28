"use client";

import { useEffect } from "react";
import { useClerk } from "@clerk/nextjs";

export default function AutoLogout() {
  const { signOut } = useClerk();

  useEffect(() => {
    signOut({ redirectUrl: "/sign-in" });
  }, [signOut]);

  return null; 
}
