
'use client';
import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { ClerkProvider, SignedIn, SignedOut, useUser } from '@clerk/nextjs';

// Component to verify dashboard user
function DashboardVerification({ children }: { children: ReactNode }) {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) return <div>Loading...</div>;

  if (!isSignedIn) {
    redirect('/sign-in');
    return null;
  }

  const userPublicMetadata = user?.publicMetadata;

  return (
    <div>
      <h1>You are signed in</h1>
      <pre>{JSON.stringify(userPublicMetadata, null, 2)}</pre>
      <div>{children}</div>
    </div>
  );
}

// Component to redirect signed-out users
function RedirectToLogin() {
  redirect('/sign-in');
  return null;
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <SignedIn>
        <DashboardVerification>{children}</DashboardVerification>
      </SignedIn>
      <SignedOut>
        <RedirectToLogin />
      </SignedOut>
    </ClerkProvider>
  );
}
