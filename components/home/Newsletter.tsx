'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Newsletter() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // newsletter signup logic
  }

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-center">
              Stay Updated with FitAI
            </CardTitle>
            <CardDescription className="text-center text-sm sm:text-base">
              Subscribe to our newsletter for the latest fitness tips, AI insights, and exclusive offers.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
              />
              <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
            </form>
            <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

