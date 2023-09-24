<template>
    <CoreSection id="skills">

        <v-col cols="12">
            <v-row justify="space-between">
                <CoreHeading cols="auto"> What I know </CoreHeading>

                <v-col cols="auto">
                    <blockquote style="max-width: 230px">
                        <p class="subheading font-weight-light font-italic">
                            Downloadable CV is only available in Dutch.
                        </p>
                        <footer class="text-center">
                            <v-form>
                                <v-btn color="primary" href="cv.pdf" download> download cv </v-btn>
                            </v-form>
                        </footer>
                    </blockquote>
                </v-col>
            </v-row>
        </v-col>

        <v-col cols="12">
            <v-row justify="space-around">
                <v-col id="my-education" cols="12" md="3" tag="section">
                    <h3 class="headline font-weight-medium mb-4 primary--text">
                        My Education
                    </h3>

                    <EducationCard v-for="(degree, i) in schema.education" :key="i" :value="degree" />
                </v-col>

                <v-col id="my-skills" cols="12" md="4" tag="section">
                    <h3 class="headline font-weight-medium mb-4 primary--text">
                        My Skills
                    </h3>

                    <Skill v-for="(skill, i) in schema.skills" :key="i" :value="skill" />
                </v-col>
            </v-row>
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
    components: {
        CoreSection,
        CoreHeading,
        Skill,
        EducationCard,
    },
    data: () => ({
        schema: {
            education: []
        }
    })
};
</script>
  