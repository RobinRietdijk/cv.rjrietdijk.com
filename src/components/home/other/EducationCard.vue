<template>
    <v-sheet class="mb-5" color="transparent">
        <v-row class="mx-0">
            <v-sheet class="mr-3" color="primary" width="1" height="100" tile />

            <v-col>
                <div class="mb-3" v-text="value.institution" />

                <div class="text-right">
                    <span class="title primary--text" v-text="`${value.studyType} ${value.area}`" />

                    <footer>
                        <div v-for="(course, i) in value.courses" :key="i" v-text="course" />
                        <div v-text="years" />
                    </footer>
                </div>
            </v-col>
        </v-row>
    </v-sheet>
</template>
  
<script>
export default {
    props: {
        value: {
            type: Object,
            default: () => ({
                institution: "",
                area: "",
                studyType: "",
                startDate: "",
                endDate: "",
                courses: [],
            }),
        },
    },

    computed: {
        years() {
            return `
            ${this.value.startDate}-
            ${this.value.endDate}
          `.trim();
        },
    },
};
</script>
  