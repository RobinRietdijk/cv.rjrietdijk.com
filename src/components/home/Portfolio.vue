<template>
    <CoreSection id="portfolio">
        <CoreHeading>What I've done</CoreHeading>

        <v-col cols="12">
            <v-row>
                <v-col cols="12" md="6" v-for="(project, i) in projects" :key="i" class="d-flex">
                    <Project :value="project" />
                </v-col>
            </v-row>
        </v-col>
    </CoreSection>
</template>

<script>
import CoreSection from "@/components/home/core/Section.vue"
import CoreHeading from "@/components/home/core/Heading.vue"
import Project from "@/components/home/other/Project.vue"

export default {
    name: "Portfolio",
    components: { CoreSection, CoreHeading, Project },
    data: () => ({
        projects: [
            {
                name: "DELPHI - AI-powered Interactive Installation",
                category: "AI / Embedded Systems",
                gradient: "linear-gradient(135deg, #0e6080 0%, #15738f 55%, #1a9bbe 100%)",
                details: "Led a team of 5 building an AI-driven installation where users manipulated sensor-equipped colour orbs to control room lighting and generate personalised poems via the ChatGPT API. Built a Node.js backend functioning as an MQTT broker; programmed microcontrollers in CircuitPython for hardware I/O. Exhibited at ThingsCon 2023 and selected for Highlight Delft 2024.",
                tech: ["Node.js", "MQTT", "CircuitPython", "ChatGPT API", "Embedded Systems"],
                client: "Interactive Environment minor - TU Delft",
                startDate: "Oct 2023",
                endDate: "Feb 2024"
            },
            {
                name: "Bachelor's Thesis - Solving Hitori Puzzles using SMT",
                category: "Research / Algorithmics",
                gradient: "linear-gradient(135deg, #1a3a5c 0%, #1a5a7a 50%, #15738f 100%)",
                details: "Researched and evaluated Satisfiability Modulo Theories (SMT) approaches for modelling and solving Hitori puzzles. Implemented solver pipelines in Python, comparing constraint formulations for correctness and performance. Graded 7.5 at TU Delft.",
                tech: ["Python", "Z3 Solver", "SMT", "Constraint Logic", "Algorithmics"],
                client: "Delft University of Technology",
                startDate: "Oct 2025",
                endDate: "Feb 2026",
                link: "https://repository.tudelft.nl/record/uuid:3083bc42-f41b-4849-b854-c9ff049d03ca"
            }
        ]
    })
};
</script>
