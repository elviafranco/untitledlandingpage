import Head from 'next/head'
import Link from 'next/link'

import {AuthLayout} from '@/components/AuthLayout'
import {Button} from '@/components/Button'
import {TextField} from '@/components/Fields'
import {Logo} from '@/components/Logo'

export default function Register() {
    return (
        <>
            <Head>
                <title>Work with Us</title>
            </Head>
            <AuthLayout>
                <div className="flex flex-col">
                    <Link href="/" aria-label="Home">
                        <Logo className="h-10 w-auto"/>
                    </Link>
                    <div className="mt-20">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Let's start your project
                        </h2>
                        <p className="mt-2 text-sm text-gray-700">
                            Our friendly team would love to hear from you.
                        </p>
                    </div>
                </div>
                <form
                    action="#"
                    className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
                >
                    <TextField
                        label="First name"
                        id="first_name"
                        name="first_name"
                        type="text"
                        autoComplete="given-name"
                        required
                    />
                    <TextField
                        label="Last name"
                        id="last_name"
                        name="last_name"
                        type="text"
                        autoComplete="family-name"
                        required
                    />
                    <TextField
                        className="col-span-full"
                        label="Email address"
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                    />
                    <TextField
                        className="col-span-full"
                        label="Phone number"
                        id="phone"
                        name="phone"
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required
                    />

                    <div className="col-span-full">
                        <Button
                            type="submit"
                            variant="solid"
                            color="blue"
                            className="w-full"
                        >
              <span>
                Let's work together <span aria-hidden="true">&rarr;</span>
              </span>
                        </Button>
                    </div>
                </form>
            </AuthLayout>
        </>
    )
}
