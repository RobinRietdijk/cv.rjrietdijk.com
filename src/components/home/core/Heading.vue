<template>
    <v-col :cols="cols">
        <div class="section-heading mb-8">
            <div class="heading-bar" />
            <h2 :class="mdAndUp ? 'text-h3' : 'text-h4'" class="font-weight-bold">
                <slot />
            </h2>
        </div>
    </v-col>
</template>

<script>
export default {
    name: "CoreHeading",
    props: {
        cols: {
            type: String,
            default: "12",
        },
    },
    data: () => ({ isHydrated: false }),
    computed: {
        mdAndUp() {
            return this.isHydrated ? this.$vuetify.display.mdAndUp : true;
        },
    },
    mounted() {
        this.isHydrated = true;
    },
};
</script>

<style scoped>
.heading-bar {
    width: 36px;
    height: 4px;
    background: #15738f;
    border-radius: 2px;
    margin-bottom: 12px;
}
</style>
