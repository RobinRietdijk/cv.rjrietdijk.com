<template>
    <CoreSection id="timeline">
        <CoreHeading>Where I've been</CoreHeading>

        <v-col cols="12" md="9" class="mx-auto">
            <div class="tl-list">
                <div class="tl-line" />

                <div
                    v-for="(item, i) in items"
                    :key="i"
                    class="tl-item"
                    :class="{ open: openIndex === i }"
                    @click="toggle(i)"
                >
                    <div class="tl-dot">
                        <v-icon :icon="item.icon || 'mdi-circle-small'" size="13" color="white" />
                    </div>

                    <div class="tl-body">
                        <div class="tl-row">
                            <div class="tl-main">
                                <span class="tl-role">{{ item.role }}</span>
                                <span class="tl-company">{{ item.company }}</span>
                            </div>
                            <div class="tl-right">
                                <span class="tl-date">{{ item.date }}</span>
                                <v-icon
                                    v-if="item.summary"
                                    class="tl-chevron"
                                    :icon="openIndex === i ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                    size="18"
                                    color="primary"
                                />
                            </div>
                        </div>

                        <div class="tl-summary-wrap" :class="{ expanded: openIndex === i }">
                            <p class="tl-summary">{{ item.summary }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </v-col>
    </CoreSection>
</template>

<script>
import CoreSection from "@/components/home/core/Section.vue"
import CoreHeading from "@/components/home/core/Heading.vue"

export default {
    name: "Timeline",
    components: { CoreSection, CoreHeading },
    data: () => ({
        openIndex: null,
        items: [
            {
                role: "Teaching Assistant",
                company: "Delft University of Technology — Industrial Design Faculty",
                date: "Apr 2024 – Jul 2024",
                icon: "mdi-school-outline",
                summary: "Supported students in designing and building embedded systems using a CircuitPython-based prototyping kit. Resolved hardware and software issues during lab sessions."
            },
            {
                role: "Audit Committee",
                company: "Delftsche Studenten Bond",
                date: "Feb 2021 – May 2026",
                icon: "mdi-file-check-outline",
                summary: "Reviewed and verified association financial documents."
            },
            {
                role: "Secretary, Board Member",
                company: "Stichting Eettafel Tyché",
                date: "Apr 2021 – Nov 2025",
                icon: "mdi-handshake-outline",
                summary: "Supported board-level decision making, recorded minutes, and managed association operations."
            },
            {
                role: "Treasurer, Almanak Committee",
                company: "Delftsche Studenten Bond",
                date: "May 2022 – Jun 2023",
                icon: "mdi-book-open-outline",
                summary: "Designed and produced the annual Almanak using Adobe InDesign and Illustrator."
            },
            {
                role: "Treasurer, OWee Committee",
                company: "Delftsche Studenten Bond",
                date: "Apr 2020 – Feb 2021",
                icon: "mdi-account-group-outline",
                summary: "Managed committee finances and built web platforms in JavaScript for student introduction week."
            },
            {
                role: "General Employee",
                company: "Prominent Tomatoes",
                date: "2012 – 2020",
                icon: "mdi-sprout-outline",
                summary: "Carried out a range of practical tasks at a large-scale greenhouse horticulture operation."
            }
        ]
    }),
    methods: {
        toggle(i) {
            this.openIndex = this.openIndex === i ? null : i
        }
    }
}
</script>

<style scoped>
.tl-list {
    position: relative;
    padding-left: 56px;
}

.tl-line {
    position: absolute;
    left: 19px;
    top: 6px;
    bottom: 6px;
    width: 2px;
    background: linear-gradient(to bottom, #15738f, rgba(21, 115, 143, 0.15));
}

.tl-item {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    cursor: pointer;
    padding: 14px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    transition: background 0.15s ease;
}

.tl-item:last-child {
    border-bottom: none;
}

.tl-item:hover .tl-role {
    color: #15738f;
}

.tl-dot {
    position: absolute;
    left: -49px;
    top: 16px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #15738f;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 3px rgba(21, 115, 143, 0.18);
    flex-shrink: 0;
    transition: transform 0.2s ease;
}

.tl-item.open .tl-dot {
    transform: scale(1.15);
    box-shadow: 0 0 0 5px rgba(21, 115, 143, 0.18);
}

.tl-body {
    flex: 1;
    min-width: 0;
}

.tl-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
}

.tl-main {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.tl-role {
    font-weight: 700;
    font-size: 0.92rem;
    color: rgba(0, 0, 0, 0.82);
    transition: color 0.15s ease;
}

.tl-company {
    font-size: 0.78rem;
    color: #15738f;
    font-weight: 500;
}

.tl-right {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
}

.tl-date {
    font-size: 0.72rem;
    color: rgba(0, 0, 0, 0.38);
    letter-spacing: 0.03em;
    white-space: nowrap;
}

.tl-chevron {
    transition: transform 0.25s ease;
}

.tl-summary-wrap {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
}

.tl-summary-wrap.expanded {
    max-height: 200px;
    padding-top: 8px;
}

.tl-summary {
    font-size: 0.85rem;
    color: rgba(0, 0, 0, 0.52);
    line-height: 1.65;
    margin: 0;
}
</style>
