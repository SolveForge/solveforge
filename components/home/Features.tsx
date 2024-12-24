'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Target, Clock, Dumbbell } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Features() {
  useScrollAnimation()

  const features = [
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "AI-Powered Personalization",
      description: "Our advanced AI analyzes your goals, fitness level, and preferences to create tailored workout plans."
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Goal-Oriented Programs",
      description: "Whether you want to build muscle, lose weight, or improve endurance, we've got you covered."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Time-Efficient Workouts",
      description: "Get maximum results with optimized workout durations based on your schedule and fitness goals."
    },
    {
      icon: <Dumbbell className="h-6 w-6 text-primary" />,
      title: "Equipment Flexibility",
      description: "Workouts adapted to your available equipment, whether you're at home or in a fully-equipped gym."
    }
  ]

  return (
    <section 
      id="features" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 animate-on-scroll">
          Why Choose FitAI?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="flex flex-col animate-on-scroll"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center pt-6 flex-grow-0">
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow flex flex-col justify-center">
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

