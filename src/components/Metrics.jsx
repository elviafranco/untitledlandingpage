const stats = [
    {id: 1, name: 'Projects completed', value: '400+'},
    {id: 2, name: 'Return on investment', value: '600%'},
    {id: 3, name: 'Global downloads', value: '10k'},
    {id: 4, name: '5-star reviews', value: '200+'},
]

export function Metrics() {
    return (
        <section
            id="metrics"
            aria-label="metrics"
            className="bg-white">
            <div className="py-16 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 md:border-t md:border-b md:border-indigo-300/10">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-8 text-center lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 md:py-16">
                                <dt className="text-base leading-7 font-medium">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}