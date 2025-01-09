'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { usePageLoading } from '@/components/LoadingScreen';
import Link from 'next/link';
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const spinnerProps = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  children: (
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
  )
};

export default function SignUpForm() {
  const router = useRouter();
  const { shouldStartPageAnimation } = usePageLoading();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name },
          emailRedirectTo: `${window.location.origin}/auth/callback`
        }
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (data?.user?.identities?.length === 0) {
        toast.error('This email is already registered');
        return;
      }

      toast.success('Please check your email to verify your account');
      router.push('/verify-email?email=' + encodeURIComponent(email));
      
    } catch (error) {
      toast.error('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  }

  const handleGoogleSignUp = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })

    if (error) {
      console.error('Error:', error.message)
    }
  }

  return (
    <section className="relative pt-32 pb-8 lg:pt-36 lg:pb-12 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: shouldStartPageAnimation ? 1 : 0, y: shouldStartPageAnimation ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            {/* Sign Up Card */}
            <div className="relative bg-[#1A1A1C]/60 backdrop-blur-sm rounded-2xl p-8 
              border border-white/[0.075] hover:border-white/[0.15] transition-all duration-300
              shadow-[0_8px_32px_rgb(0,0,0,0.4)]"
            >
              {/* Card Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 
                    bg-clip-text text-transparent">
                    Create Account
                  </span>
                </h1>
                <p className="mt-2 text-gray-400">Join us and start your journey</p>
              </div>

              {/* Social Sign Up Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  className="group relative bg-white/[0.05] hover:bg-white/[0.1]
                    text-white px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300
                    border border-white/[0.05] backdrop-blur-xl h-11"
                  onClick={handleGoogleSignUp}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center">
                    <svg className="mr-2 h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </span>
                </Button>
                <Button
                  className="group relative bg-white/[0.05] hover:bg-white/[0.1]
                    text-white px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300
                    border border-white/[0.05] backdrop-blur-xl h-11"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center">
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                    </svg>
                    Apple
                  </span>
                </Button>
              </div>

              {/* Divider */}
              <div className="mt-6 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/[0.075]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 py-1 rounded-full text-gray-400" style={{ backgroundColor: '#1A1A1C99' }}>
                    or continue with email
                  </span>
                </div>
              </div>

              {/* Sign Up Form */}
              <form className="mt-6 space-y-6" onSubmit={handleSignUp}>
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/[0.05] border-white/[0.075] text-white h-11
                      focus:border-blue-500/50 focus:ring-blue-500/50 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/[0.05] border-white/[0.075] text-white h-11
                      focus:border-blue-500/50 focus:ring-blue-500/50 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/[0.05] border-white/[0.075] text-white h-11
                      focus:border-blue-500/50 focus:ring-blue-500/50 transition-all duration-300"
                    placeholder="Create a password"
                  />
                </div>

                <div className="flex items-start pt-2">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500
                        bg-white/[0.05] border-white/[0.075]"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="terms" className="text-sm text-gray-400">
                      I agree to the{' '}
                      <Link href="/terms" className="text-blue-400 hover:text-blue-300">
                        Terms of Service
                      </Link>
                      {' '}and{' '}
                      <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 
                    hover:to-purple-600 text-white font-medium rounded-xl transition-all duration-300
                    shadow-[0_8px_16px_rgb(0,0,0,0.4)] hover:shadow-[0_12px_20px_rgb(0,0,0,0.6)]"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" {...spinnerProps} />
                      Creating Account...
                    </span>
                  ) : (
                    'Create Account'
                  )}
                </Button>
              </form>

              {/* Sign In Link */}
              <p className="mt-8 text-center text-sm text-gray-400">
                Already have an account?{' '}
                <Link
                  href="/signin"
                  className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 