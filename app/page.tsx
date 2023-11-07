import CallToAction from '@/components/CallToAction'
import Collection from '@/components/Collection'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Call To Action */}
      <CallToAction />

      {/* Coffee Collection Section */}
      <Collection />

      {/* Benefits Section */}
      <Benefits />

      {/* How It Works Section */}
      <HowItWorks />
    </main>
  )
}
