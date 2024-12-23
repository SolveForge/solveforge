import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Fitness Journey?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied users who have achieved their fitness goals with FitAI. Start your personalized workout plan today!
        </p>
        <Button size="lg" variant="secondary">
          Get Your Custom Workout Plan
        </Button>
      </div>
    </section>
  )
}

