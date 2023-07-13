import {Container} from "@/components/Container";


export function Metrics() {
    return (
        <section
            id="metrics"
            aria-label="metrics"
            className="flex space-x-2 flex-wrap md:flex-nowrap md:space-x-16 md:space-y-6"
        >
            <Container>
                <p>400+</p>
                <p>Projects completed</p>
            </Container>
            <Container>
                <p>400+</p>
                <p>Projects completed</p>
            </Container>
            <Container>
                <p>400+</p>
                <p>Projects completed</p>
            </Container>
            <Container>
                <p>400+</p>
                <p>Projects completed</p>
            </Container>

        </section>
    )
}