import Image from 'next/image'

import {StarIcon} from '@heroicons/react/20/solid'

import {Container} from '@/components/Container'
import avatarImage1 from '@/images/avatars/candicewu.png'


export function Testimonials() {
    return (
        <section
            id="testimonials"
            aria-label="What our clients are saying"
            className="bg-slate-50 py-16 sm:py-24"
        >
            <Container className="flex space-y-10 flex-wrap md:flex-nowrap md:space-x-16 md:space-y-6">
                <div className="w-80 h-auto">
                    <Image src={avatarImage1} alt="features" unoptimized/>
                </div>
                <figure className="mx-auto max-w-2xl">
                    <p className="sr-only">5 out of 5 stars</p>
                    <div className="flex gap-x-1 text-yellow-400">
                        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true"/>
                        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true"/>
                        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true"/>
                        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true"/>
                        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true"/>
                    </div>
                    <blockquote
                        className="mt-6 text-xl font-medium leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                            “This team really understood the paired-back aesthetic that we were looking for. We couldn't
                            be happier with our new offices!”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10 flex items-center gap-x-6">
                        <div className="text-sm leading-6">
                            <div className="font-semibold text-gray-900">Candice Wu</div>
                            <div className="mt-0.5 text-gray-600">Head of Design, Layers</div>
                        </div>
                    </figcaption>
                </figure>
            </Container>
        </section>
    )
}
