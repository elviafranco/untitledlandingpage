import Head from 'next/head'

import {CallToAction} from '@/components/CallToAction'
import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'
import {Hero} from '@/components/Hero'
import {Features} from "@/components/Features";
import {Testimonials} from '@/components/Testimonials'
import {Metrics} from '@/components/Metrics'

export default function Home() {
    return (
        <>
            <Head>
                <title>Landing - Interior Design</title>
                <meta
                    name="description"
                    content="We design physical experiences."
                />
            </Head>
            <Header/>
            <main>
                <Hero/>
                <Features/>
                <Testimonials/>
                <Metrics/>
                <CallToAction/>
            </main>
            <Footer/>
        </>
    )
}
