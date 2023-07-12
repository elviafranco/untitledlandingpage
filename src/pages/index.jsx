import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from "@/components/Features";
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Untitled UI - Interior Design Agency</title>
        <meta
          name="description"
          content="We design physical experiences."
        />
      </Head>
      <Header />
      <main>
        <Hero />
          <Features />
        {/*<PrimaryFeatures />*/}
        {/*<SecondaryFeatures />*/}
        {/*<CallToAction />*/}
        <Testimonials />
        {/*<Pricing />*/}
        {/*<Faqs />*/}
      </main>
      <Footer />
    </>
  )
}
