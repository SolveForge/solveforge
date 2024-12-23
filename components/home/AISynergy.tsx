'use client'

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Dumbbell, Apple } from 'lucide-react'

export default function AISynergy() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ...
  }
  
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 px-4">
          The Power of AI-Driven Fitness and Nutrition
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          <Card className="p-4 sm:p-6">
            <CardHeader className="text-center pt-6">
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Dumbbell className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardTitle>AI Workout Planner</CardTitle>
              <CardDescription>Personalized exercise routines based on your goals and fitness level</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Adapts to your progress</li>
                <li>Considers available equipment</li>
                <li>Optimizes for muscle growth and recovery</li>
                <li>Prevents overtraining and injuries</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="p-4 sm:p-6">
            <CardHeader className="text-center pt-6">
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Apple className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardTitle>AI Nutrition Planner</CardTitle>
              <CardDescription>Customized meal plans tailored to your dietary needs and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Balances macronutrients</li>
                <li>Suggests meal timing for optimal energy</li>
                <li>Accommodates dietary restrictions</li>
                <li>Provides easy-to-follow recipes</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="p-4 sm:p-6">
            <CardHeader className="text-center pt-6">
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardTitle>AI-Powered Synergy</CardTitle>
              <CardDescription>Workout and nutrition plans work together for maximum results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Aligns nutrition with workout intensity</li>
                <li>Optimizes pre and post-workout nutrition</li>
                <li>Adjusts plans based on your progress</li>
                <li>Provides holistic approach to fitness</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

