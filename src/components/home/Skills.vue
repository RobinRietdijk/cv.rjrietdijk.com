<template>
    <CoreSection id="skills">
        <CoreHeading>What I know</CoreHeading>

        <v-col cols="12" md="4">
            <p class="sub-label">Education</p>
            <EducationCard v-for="(degree, i) in schema.education" :key="i" :value="degree" />
        </v-col>

        <v-col cols="12" md="8">
            <p class="sub-label">Technical Skills</p>
            <Skill v-for="(skill, i) in schema.skills" :key="i" :value="skill" />

            <p class="sub-label mt-8">Languages</p>
            <div class="lang-row">
                <div v-for="lang in languages" :key="lang.name" class="lang-card">
                    <span class="lang-flag">{{ lang.flag }}</span>
                    <div>
                        <div class="lang-name">{{ lang.name }}</div>
                        <div class="lang-level">{{ lang.level }}</div>
                    </div>
                </div>
            </div>
        </v-col>
    </CoreSection>
</template>

<script>
import CoreSection from "@/components/home/core/Section.vue"
import CoreHeading from "@/components/home/core/Heading.vue"
import Skill from "@/components/home/other/Skill.vue"
import EducationCard from "@/components/home/other/EducationCard.vue"

export default {
    name: "Skills",
    components: { CoreSection, CoreHeading, Skill, EducationCard },
    data: () => ({
        languages: [
            { flag: '🇳🇱', name: 'Dutch',   level: 'Native' },
            { flag: '🇬🇧', name: 'English', level: 'Fluent' },
        ],
        schema: {
            education: [
                {
                    institution: "Delft University of Technology",
                    studyType: "BSc",
                    area: "Computer Science & Engineering",
                    startDate: "2017",
                    endDate: "2026",
                    courses: ["Minor: Interactive Environments"]
                },
                {
                    institution: "ISW Hoogeland",
                    studyType: "VWO",
                    area: "Natuur & Techniek",
                    startDate: "2011",
                    endDate: "2017",
                    courses: []
                }
            ],
            skills: [
                {
                    name: "Proficient",
                    keywords: [
                        { name: "Python" }, { name: "JavaScript" }, { name: "Vue.js" },
                        { name: "Node.js" }, { name: "Java" }, { name: "HTML / CSS" },
                        { name: "CircuitPython" }, { name: "MQTT" },
                    ]
                },
                {
                    name: "Familiar With",
                    keywords: [
                        { name: "C" }, { name: "C++" }, { name: "Z3 / SMT" },
                    ]
                },
                {
                    name: "Tools",
                    keywords: [
                        { name: "Git" }, { name: "Docker" }, { name: "Nginx" },
                        { name: "Adobe InDesign" }, { name: "Illustrator" },
                    ]
                }
            ]
        }
    })
};
</script>

<style scoped>
.sub-label {
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: rgba(0, 0, 0, 0.38);
    font-weight: 600;
    margin-bottom: 20px;
}

.lang-row {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
}

.lang-card {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(21, 115, 143, 0.06);
    border: 1px solid rgba(21, 115, 143, 0.14);
    border-radius: 12px;
    padding: 10px 16px;
}

.lang-flag {
    font-size: 1.6rem;
    line-height: 1;
}

.lang-name {
    font-size: 0.88rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.78);
}

.lang-level {
    font-size: 0.72rem;
    color: #15738f;
    font-weight: 500;
}
</style>
