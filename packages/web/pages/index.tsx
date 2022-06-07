import Hero from '@/components/Common/Hero'
import MainLayout from '@/components/Common/MainLayout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero />
    </MainLayout>
  )
}

export default Home
