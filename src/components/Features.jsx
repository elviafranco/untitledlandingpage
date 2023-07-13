import Image from 'next/image'

import {Container} from '@/components/Container'
import featureimg from "@/images/features.png"

const features = [
    {
        title: 'Share team inboxes',
        description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
        title: 'Deliver instant answers',
        description: "An all in-one customer service platform that helps you balance everything your customers need to be happy."
    },
]

export function Features() {
    return (
        <section
            id="features"
            aria-label="What we offer"
            className="bg-white py-24">
            <Container className="flex space-y-6 flex-wrap md:flex-nowrap md:space-x-4 items-center">
                <div>
                    <p className="font-display text-base text-indigo-700">Who we are</p>
                    <h2 className="font-semibold text-4xl tracking-tight text-black">
                        Commercial interior designers
                    </h2>
                    <p className="mt-6 text-lg text-slate-600">
                        Design that influences how people work, learn, live and experience the world. We specialize in
                        customized office design, restaurant design, shop design, and studio design.
                    </p>
                </div>
                <div>
                    {features.map((feature) => (
                        <div className="mb-4"
                             key={feature.title}>
                            <p className="font-semibold">{feature.title}</p>
                            <p className="text-slate-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
            <Container className="mt-16">
                <Image src={featureimg} alt="features" optimized/>
            </Container>
        </section>
    )
}