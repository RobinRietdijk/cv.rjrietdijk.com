<template>
    <div class="edu-card mb-6">
        <div class="edu-bar" />
        <div class="edu-body">
            <div class="edu-institution">{{ value.institution }}</div>
            <div class="edu-degree">{{ value.studyType }} {{ value.area }}</div>
            <div class="edu-meta">{{ value.startDate }} – {{ value.endDate }}</div>
            <div v-for="(course, i) in value.courses" :key="i" class="edu-course">
                {{ course }}
            </div>
        </div>
    </div>
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
};
</script>

<style scoped>
.edu-card {
    display: flex;
    gap: 16px;
    align-items: flex-start;
}

.edu-bar {
    width: 3px;
    min-height: 72px;
    background: #15738f;
    border-radius: 2px;
    flex-shrink: 0;
    margin-top: 3px;
}

.edu-institution {
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: rgba(0, 0, 0, 0.4);
    margin-bottom: 4px;
}

.edu-degree {
    font-size: 0.95rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.82);
    margin-bottom: 3px;
}

.edu-meta {
    font-size: 0.8rem;
    color: #15738f;
    font-weight: 500;
    margin-bottom: 4px;
}

.edu-course {
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.5);
    font-style: italic;
}
</style>
