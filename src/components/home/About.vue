<template>
    <CoreSection id="about">
        <CoreHeading>About me</CoreHeading>

        <v-col cols="12" md="7">
            <p class="bio-text">
                Computer Science &amp; Engineering graduate from TU Delft. Built DELPHI, an
                AI-driven interactive installation exhibited at ThingsCon 2023 and Highlight Delft
                2024, as lead developer and team leader. Bachelor's thesis applied SMT solvers to
                constraint-based logic puzzles. Looking for a software engineering role where I can
                work on technically challenging problems end-to-end.
            </p>
            <v-img src="@/assets/signature.png" width="140" class="mt-6 mb-6 signature" />

            <a class="btn-cv" href="/CV_RJRietdijk_EN.pdf" download="CV_Robin_Rietdijk.pdf">
                <v-icon icon="mdi-download" size="16" class="mr-2" />
                Download CV
            </a>
        </v-col>

        <v-col cols="12" md="4" offset-md="1">
            <div class="contact-list">
                <div v-for="item in contacts" :key="item.label" class="contact-row">
                    <div class="contact-icon-wrap">
                        <v-icon :icon="item.icon" color="primary" size="16" />
                    </div>
                    <div>
                        <div class="contact-label">{{ item.label }}</div>
                        <a v-if="item.href" :href="item.href" target="_blank" rel="noopener"
                            class="contact-value contact-link">{{ item.value }}</a>
                        <span v-else class="contact-value">{{ item.value }}</span>
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
    name: "About",
    components: { CoreSection, CoreHeading },
    data: () => ({
        contacts: [
            {label: 'Location', value: 'Delft, Netherlands', icon: 'mdi-map-marker-outline'},
            {label: 'Email', value: 'robin@rjrietdijk.com', icon: 'mdi-email-outline', href: 'mailto:robin@rjrietdijk.com'},
            {label: 'Phone', value: '+31 (0) 6 1429 6237', icon: 'mdi-phone-outline'},
            {label: 'GitHub', value: 'RobinRietdijk', icon: 'mdi-github', href: 'https://github.com/RobinRietdijk'},
        ],
    }),
}
</script>

<style scoped>
.bio-text {
    font-size: 1.02rem;
    line-height: 1.85;
    color: rgba(0, 0, 0, 0.62);
    max-width: 540px;
    margin: 0;
}

.contact-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 4px;
}

.contact-row {
    display: flex;
    align-items: flex-start;
    gap: 12px;
}

.contact-icon-wrap {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: rgba(21, 115, 143, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
}

.contact-label {
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(0, 0, 0, 0.38);
    margin-bottom: 2px;
}

.contact-value {
    font-size: 0.88rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.76);
}

.contact-link {
    color: #15738f;
    text-decoration: none;
}

.contact-link:hover {
    text-decoration: underline;
}

:deep(.signature img),
.signature :deep(img) {
    filter: invert(1) opacity(0.75);
}

.btn-cv {
    display: inline-flex;
    align-items: center;
    padding: 10px 24px;
    border: 2px solid #15738f;
    border-radius: 50px;
    color: #15738f;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    background: transparent;
    transition: background 0.25s ease, color 0.25s ease;
}

.btn-cv:hover {
    background: #15738f;
    color: #ffffff;
}
</style>
