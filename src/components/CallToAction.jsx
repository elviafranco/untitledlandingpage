import Link from 'next/link'

import {AuthLayout} from '@/components/AuthLayout'
import {TextField} from "@/components/Fields";
import {Button} from "@/components/Button";

export function CallToAction() {
    return (
        <section
            id="get-started-today"
        >
            <AuthLayout>
                <div className="flex flex-col">
                    <div>
                        <h2 className="font-semibold text-2xl md:text-3xl tracking-tight">
                            Let's start your project
                        </h2>
                        <p className="mt-2 text-base text-slate-600">
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

                    <div className="flex items-center col-span-full">
                        <input
                            id="same-as-shipping"
                            name="same-as-shipping"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <div className="ml-2">
                            <label className="text-sm text-slate-700">
                                You agree to our friendly {' '}
                                <Link
                                    href="#"
                                    className="font-medium hover:underline"
                                >
                                    privacy policy
                                </Link>
                                .
                            </label>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <Button
                            type="submit"
                            variant="solid"
                            color="purple"
                            className="w-full"
                        >
              <span>
                Let's work together <span aria-hidden="true">&rarr;</span>
              </span>
                        </Button>
                    </div>
                </form>
            </AuthLayout>
        </section>
    )
}
