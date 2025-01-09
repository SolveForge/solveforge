'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

export default function VerifyEmail() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get('email');

  return (
    <div className="relative pt-32 pb-8 lg:pt-36 lg:pb-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">
          Verify your email
        </h1>
        <p className="text-gray-400 mb-8">
          We sent a verification link to {email}.<br />
          Please check your email to continue.
        </p>
        <Button
          onClick={() => router.push('/signin')}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        >
          Go to Sign In
        </Button>
      </div>
    </div>
  );
} 