'use client';

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LoginForm from '@/components/login/LoginForm'

export default function SignIn() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Main background glow */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-30%,#3b3b3f,transparent)]" />
      </div>
      
      {/* Content */}
      <div className="relative">
        <Header />
        <LoginForm />
      </div>
      <Footer />
    </main>
  )
} 