<template>
    <v-navigation-drawer v-if="mdAndUp" app class="text-center" color="#181818" permanent>
        <v-row class="flex-column fill-height py-5 mx-0" justify="center">
            <v-img src="@/assets/logo.png" contain max-height="300px" />

            <div class="display-1 mb-2 div-name" v-text="schema.basics.name" />
            <div v-for="(item, i) in items" :key="i">
                <v-btn class="text-capitalize subheading font-weight-light mb-3" text @click="$vuetify.goTo(item.to)">
                    <span v-text="item.text" />
                </v-btn>
            </div>
            <div class="mt-auto">
                <social-contacts />
            </div>
        </v-row>
    </v-navigation-drawer>
</template>
  
<script>
import SocialContacts from "@/components/other/SocialContacts.vue"
export default {
    name: "Drawer",
    components: {
        SocialContacts: SocialContacts,
    },
    data: (vm) => ({
        isHydrated: false,
        items: [
            {
                text: "About Me",
                to: "#about",
            },
            {
                text: "Services",
                to: "#services",
            },
            {
                text: "Experience",
                to: "#timeline",
            },
            {
                text: "Skills & Education",
                to: "#skills",
            },
            {
                text: "Portfolio",
                to: "#portfolio",
            },
            {
                text: "Contact",
                to: "#contact",
            },
        ],
    }),

    computed: {
        mdAndUp() {
            return this.isHydrated ? this.$vuetify.display.mdAndUp : undefined;
        },
    },

    mounted() {
        this.isHydrated = true;
    },
};
</script>

<style scoped>
.div-name {
    margin-top: -28px
}
</style>
  