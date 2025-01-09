'use client';

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SignUpForm from '@/components/signup/SignUpForm'

export default function SignUp() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Main background glow */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-30%,#3b3b3f,transparent)]" />
      </div>
      
      {/* Content */}
      <div className="relative">
        <Header />
        <SignUpForm />
      </div>
      <Footer />
    </main>
  )
} 