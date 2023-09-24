<template>
    <CoreSection id="services">
        <CoreHeading>What I can do for you</CoreHeading>

        <v-col cols="12" md="6">
            <v-expansion-panels v-model="expansion" popout>
                <v-expansion-panel v-for="(item, i) in items" :key="i">
                    <v-expansion-panel-title class="title font-weight-light">
                        <div v-text="item.name" />
                    </v-expansion-panel-title>

                    <v-expansion-panel-text :class="expansion !== i ? 'transparent' : ''">
                        <div>
                            <v-card color="transparent" flat>
                                <v-card-text>
                                    <div v-for="(text, j) in item.keywords" :key="j" v-text="text" />
                                </v-card-text>
                            </v-card>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-col>
    </CoreSection>
</template>
  
<script>
import CoreSection from "@/components/home/core/Section.vue"
import CoreHeading from "@/components/home/core/Heading.vue"

export default {
    name: 'Services',
    components: {
        CoreSection,
        CoreHeading,
    },
    data: () => ({
        expansion: 0,
        items: [{
            name: "Test",
            keywords: "test"
        }],
    }),
}
</script>
  