<template>
    <CoreSection id="timeline">
        <CoreHeading>Where I've been</CoreHeading>

        <v-col cols="12" md="9" class="mx-auto px-0">
            <v-timeline :dense="mdAndUp" :light="light">
                <v-timeline-item v-for="(item, i) in items" :key="i" v-bind="getAttrs()">
                    <span slot="opposite" v-text="item.startDate" />

                    <v-card class="pa-3">
                        <h3 class="subheading font-weight-bold" v-text="item.company" />
                        <div v-text="item.summary" />
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-col>
    </CoreSection>
</template>
  
<script>
import CoreSection from "@/components/home/core/Section.vue"
import CoreHeading from "@/components/home/core/Heading.vue"

export default {
    name: "Timeline",
    components: {
        CoreSection,
        CoreHeading,
    },
    data: (vm) => ({
        isHydrated: false,
        light: vm.random(),
        items: []
    }),

    computed: {
        mdAndUp() {
            return this.isHydrated ? this.$vuetify.display.smAndDown : undefined;
        },
    },

    methods: {
        getAttrs() {
            const attrs = {};

            if (this.random()) attrs.fillDot = true;
            if (this.random()) attrs.largeDot = true;

            return attrs;
        },
        random() {
            return Boolean(Math.round(Math.random()));
        },
    },

    mounted() {
        this.isHydrated = true;
    },
}
</script>
  