<template>
    <v-sheet class="py-md-5" height="100%" color="transparent">
        <div class="text-center mb-5">
            <CoreSubheading class="mb-1" v-text="value.name" />
            <span class="subheading" v-text="value.category" />
        </div>
        <v-row>
            <v-col cols="auto">
                <div class="mb-3 div-container">
                    <CoreSubheading class="mb-3">
                        Project Details
                    </CoreSubheading>
                    <CoreText>
                        {{ value.details }}
                    </CoreText>

                    <CoreSubheading>
                        Project Info
                    </CoreSubheading>
                    <v-list class="transparent">
                        <v-list-item>
                            <v-list-item-action>
                                <v-icon color="primary">
                                    mdi-account
                                </v-icon>
                            </v-list-item-action>
                            <v-list-item-title class="mr-2">
                                Client Name
                            </v-list-item-title>
                            <v-list-item-title class="caption grey--text text--lighten-1 hidden-sm-and-down">
                                {{ value.client }}
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-action>
                                <v-icon color="primary">
                                    mdi-calendar
                                </v-icon>
                            </v-list-item-action>
                            <v-list-item-title class="mr-2">
                                Project Dates
                            </v-list-item-title>
                            <v-list-item-title class="caption grey--text text--lighten-1 hidden-sm-and-down">
                                {{ value.startDate }}, {{ value.endDate }}
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-action>
                                <v-icon color="primary">
                                    mdi-tag
                                </v-icon>
                            </v-list-item-action>
                            <v-list-item-title class="mr-2">
                                Project Category
                            </v-list-item-title>
                            <v-list-item-title class="caption grey--text text--lighten-1 hidden-sm-and-down">
                                {{ value.category }}
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </div>
            </v-col>
            <v-col v-if="value.src" class="hidden-sm-and-down">
                <v-img :src="require(`@/assets/projects/${value.src}`)" height="350" width="500" contain class="mx-auto" />
            </v-col>
        </v-row>
    </v-sheet>
</template>
  
<script>
import CoreSubheading from "@/components/home/core/Subheading.vue"
import CoreText from "@/components/home/core/Text.vue"

export default {
    props: {
        value: {
            type: Object,
            default: () => ({
                name: '',
                category: '',
                src: undefined,
                details: '',
                client: '',
                startDate: '',
                endDate: ''
            }),
        },
    },
    components: {
        CoreSubheading: CoreSubheading,
        CoreText: CoreText,
    },
}
</script>

<style scoped>
.div-container {
    max-width: 500px;
}
</style>
  