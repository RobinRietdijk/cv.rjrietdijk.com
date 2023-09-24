<template>
    <CoreSection id="portfolio">

        <CoreHeading>What I've done</CoreHeading>

        <v-col cols="12">
            <v-carousel :cycle="false" :height="650" :show-arrows="false" class="elevation-0" hide-delimiter-background>
                <v-carousel-item v-for="(project, i) in projects" :key="i">
                    <Project :value="project" />
                </v-carousel-item>
            </v-carousel>
        </v-col>
    </CoreSection>
</template>
  
<script>
import CoreSection from "@/components/home/core/Section.vue"
import CoreHeading from "@/components/home/core/Heading.vue"
import Project from "@/components/home/other/Project.vue"

export default {
    name: "Portfolio",
    components: {
        CoreSection,
        CoreHeading,
        Project,
    },
    data: () => ({
        projects: {
            
        }
    })
};
</script>
  