<template>
    <div class="skill-group">
        <div class="skill-group-label">{{ value.name }}</div>
        <div class="chip-wrap">
            <v-chip
                v-for="skill in value.keywords"
                :key="skill.name"
                :color="chipColor"
                :variant="chipVariant"
                size="small"
                class="skill-chip"
            >
                {{ skill.name }}
            </v-chip>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Object,
            default: () => ({ name: "", keywords: [] }),
        },
    },
    computed: {
        chipVariant() {
            return this.value.name.toLowerCase().includes('familiar') ? 'outlined' : 'tonal'
        },
        chipColor() {
            return this.value.name.toLowerCase().includes('tool') ? 'secondary' : 'primary'
        },
    },
};
</script>

<style scoped>
.skill-group {
    margin-bottom: 24px;
}

.skill-group-label {
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.13em;
    color: #15738f;
    font-weight: 600;
    margin-bottom: 10px;
}

.chip-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.skill-chip {
    font-size: 0.78rem !important;
    font-weight: 500;
}
</style>
