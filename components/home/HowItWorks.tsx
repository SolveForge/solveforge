import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from 'next/image'

export default function HowItWorks() {
  const steps = [
    {
      title: "Input Your Details",
      description: "Tell us about your fitness level, goals, available equipment, and time constraints."
    },
    {
      title: "AI Analysis",
      description: "Our AI processes your information, considering factors like muscle groups, recovery time, and progressive overload."
    },
    {
      title: "Generate Custom Plan",
      description: "Receive a personalized workout plan optimized for your specific needs and goals."
    },
    {
      title: "Track & Adapt",
      description: "As you progress, our AI continuously adjusts your plan for optimal results."
    }
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">How FitAI Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-3xl font-bold text-primary mr-4">{index + 1}</span>
                  {step.title}
                </CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">How Our AI Solves Common Fitness Challenges</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            FitAI addresses the overwhelm and uncertainty faced by fitness beginners. By analyzing vast amounts of fitness data and best practices, our AI creates structured, progressive plans that prevent common mistakes like overtraining or neglecting certain muscle groups. It adapts to your progress, ensuring you're always challenged but not overwhelmed, making your fitness journey smoother and more effective.
          </p>
          <div className="relative h-64 max-w-3xl mx-auto rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=800"
              alt="AI Fitness Challenge Solution Visualization"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <p className="text-white text-lg font-semibold">
                Space for potential 3D element showcasing AI-driven fitness solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

