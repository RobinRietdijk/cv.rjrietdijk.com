<template>
    <div class="project-card">

        <!-- Gradient banner -->
        <div class="card-banner" :style="{ background: value.gradient }">
            <div class="banner-top">
                <v-chip size="small" variant="flat" color="white" class="banner-chip">
                    {{ value.category }}
                </v-chip>
                <span class="banner-dates">{{ value.startDate }} – {{ value.endDate }}</span>
            </div>
        </div>

        <div class="card-body">
            <h3 class="card-title">{{ value.name }}</h3>
            <p class="card-details">{{ value.details }}</p>

            <!-- Tech tags -->
            <div v-if="value.tech && value.tech.length" class="tech-row">
                <v-chip
                    v-for="t in value.tech"
                    :key="t"
                    size="x-small"
                    variant="tonal"
                    color="primary"
                    class="tech-chip"
                >
                    {{ t }}
                </v-chip>
            </div>

            <div class="card-footer">
                <v-icon icon="mdi-office-building-outline" size="14" color="primary" class="mr-2" />
                <span class="card-client">{{ value.client }}</span>
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
                name: '', category: '', details: '', client: '',
                startDate: '', endDate: '', tech: [],
                gradient: 'linear-gradient(135deg, #15738f, #1a9bbe)',
            }),
        },
    },
}
</script>

<style scoped>
.project-card {
    background: #ffffff;
    border-radius: 18px;
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(21, 115, 143, 0.12);
    box-shadow: 0 2px 12px rgba(21, 115, 143, 0.06);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    cursor: default;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 40px rgba(21, 115, 143, 0.16);
}

/* ── Banner ───────────────────────────────────────────── */
.card-banner {
    padding: 20px 24px 18px;
}

.banner-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    flex-wrap: wrap;
}

.banner-chip {
    font-weight: 600;
    font-size: 0.72rem !important;
    color: rgba(255, 255, 255, 0.95) !important;
    background: rgba(255, 255, 255, 0.22) !important;
}

.banner-dates {
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.72);
    letter-spacing: 0.04em;
}

/* ── Body ─────────────────────────────────────────────── */
.card-body {
    padding: 22px 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
}

.card-title {
    font-size: 1.08rem;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.84);
    line-height: 1.35;
    margin: 0;
}

.card-details {
    font-size: 0.88rem;
    line-height: 1.78;
    color: rgba(0, 0, 0, 0.56);
    flex: 1;
    margin: 0;
}

/* ── Tech tags ────────────────────────────────────────── */
.tech-row {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.tech-chip {
    font-size: 0.7rem !important;
}

/* ── Footer ───────────────────────────────────────────── */
.card-footer {
    display: flex;
    align-items: center;
    padding-top: 12px;
    border-top: 1px solid rgba(21, 115, 143, 0.1);
    margin-top: auto;
}

.card-client {
    font-size: 0.76rem;
    color: rgba(0, 0, 0, 0.4);
}
</style>
