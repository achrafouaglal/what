'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

export default function Page() {

  const { isSignedIn } = useAuth();
  console.log(isSignedIn) 
  return (
    <main className="min-h-screen flex items-center justify-center">
      this {isSignedIn}
    </main>
  );
}
