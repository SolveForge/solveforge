import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Microscope, BookOpen, TrendingUp, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ScienceBehindAI() {
  const sciencePoints = [
    {
      icon: <Microscope className="h-8 w-8 text-primary" />,
      title: "Evidence-Based Approach",
      description: "Our AI is trained on peer-reviewed scientific studies and established exercise physiology principles."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Continuous Learning",
      description: "The AI stays up-to-date with the latest research in fitness and nutrition science."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Data-Driven Optimization",
      description: "Analyzes user data to refine and improve workout and nutrition recommendations over time."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Personalized Adaptations",
      description: "Utilizes machine learning to understand individual responses to different training and nutrition strategies."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">The Science Behind Our AI</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Our AI is built on a foundation of accurate, cutting-edge scientific research to optimize your fitness and nutrition journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {sciencePoints.map((point, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center space-x-4">
                {point.icon}
                <CardTitle>{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="AI Science Visualization"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
            <p className="text-white text-lg font-semibold">
              Space for potential 3D element showcasing the scientific principles behind our AI
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

