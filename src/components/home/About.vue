<template>
    <CoreSection id="about">

        <CoreHeading>About me</CoreHeading>

        <v-col cols="12" md="7">
            <v-row justify="space-between">
                <v-col cols="12" md="7">
                    <CoreText class="mb-0">
                        <p>TEST</p>
                        <div>
                            <v-img src="@/assets/signature.png" class="ml-auto" width="150" />
                        </div>
                    </CoreText>
                </v-col>

                <v-col cols="12" md="4">
                    <v-row class="align-center">
                        <v-col cols="6" class="text-uppercase primary--text font-weight-medium">
                            <div class="mb-3" v-text="'Location'" />
                            <div class="mb-3" v-text="'Email'" />
                            <div class="mb-3" v-text="'Phone'" />
                            <div v-text="'Discord'" />
                        </v-col>
                        <v-col cols="6" class="subheading text-no-wrap">
                            <div class="mb-3">Test</div>
                            <div class="mb-3">TEST</div>
                            <div class="mb-3">Test</div>
                            <div>TEST</div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>

        <v-col class="hidden-sm-and-down text-right text-uppercase" cols="5">
            <div class="display-1">TEST</div>

            <span class="primary--text headline font-weight-light">TEST</span>
        </v-col>
    </CoreSection>
</template>

<script>
import CoreSection from "@/components/home/core/Section.vue"
import CoreHeading from "@/components/home/core/Heading.vue"
import CoreText from "@/components/home/core/Text.vue"
export default {
    name: "About",
    components: {
        CoreHeading,
        CoreSection,
        CoreText,
    },
}
</script>

<style scoped>
.v-expansion-panels>li {
    border-top: 1px solid rgba(#fff, .12) !important
}
</style>
