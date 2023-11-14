import Footer from '@/components/Footer'
import Header from '@/components/Header'
import DemoSection from '@/components/Home/DemoSection'
import HeroSection from '@/components/Home/HeroSection'

export default function Home() {

  return (
    <main>
      <div className='bg h-screen'>
        <Header />
        <HeroSection />
      </div>
      <DemoSection />
      <Footer />
    </main>
  )
}
