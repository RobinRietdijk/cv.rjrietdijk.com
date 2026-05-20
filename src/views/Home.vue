<template>
  <div>
    <Hero />

    <div class="hero-fade" />

    <div class="sect sect-about">
      <v-container>
        <About />
      </v-container>
    </div>

    <div class="sect sect-portfolio">
      <v-container style="position: relative; z-index: 1;">
        <Portfolio />
      </v-container>
    </div>

    <div class="sect sect-timeline">
      <v-container>
        <Timeline />
      </v-container>
    </div>

    <div class="sect sect-skills">
      <v-container style="position: relative; z-index: 1;">
        <Skills />
      </v-container>
    </div>

    <footer class="site-footer">
      <span class="text-caption text-medium-emphasis">
        Robin Rietdijk &copy; {{ year }}
      </span>
    </footer>
  </div>
</template>

<script setup>
import Hero from "@/components/home/Hero.vue"
import About from "@/components/home/About.vue"
import Portfolio from "@/components/home/Portfolio.vue"
import Timeline from "@/components/home/Timeline.vue"
import Skills from "@/components/home/Skills.vue"

const year = new Date().getFullYear()
</script>

<style scoped>
.hero-fade {
  height: 160px;
  margin-top: -160px;
  background: linear-gradient(to bottom, transparent, #ffffff);
  position: relative;
  z-index: 10;
  pointer-events: none;
}

.sect {
  padding: 96px 0;
  position: relative;
  overflow: hidden;
}

.sect-about {
  background: #ffffff;
}

.sect-portfolio {
  background: transparent;
}
.sect-portfolio::after {
  content: '';
  position: absolute;
  inset: -80px 0;
  background-color: rgba(232, 246, 250, 0.9);
  background-image: radial-gradient(circle, rgba(21, 115, 143, 0.14) 1.5px, transparent 1.5px);
  background-size: 28px 28px;
  transform: skewY(-2.5deg);
  z-index: 0;
}

.sect-timeline {
  background: rgba(255, 255, 255, 0.86);
}

.sect-skills {
  background: transparent;
}
.sect-skills::after {
  content: '';
  position: absolute;
  inset: -80px 0;
  background-color: rgba(232, 246, 250, 0.9);
  background-image: radial-gradient(circle, rgba(21, 115, 143, 0.14) 1.5px, transparent 1.5px);
  background-size: 28px 28px;
  transform: skewY(2.5deg);
  z-index: 0;
}

.site-footer {
  background: rgba(232, 246, 250, 0.92);
  border-top: 1px solid rgba(21, 115, 143, 0.12);
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
</style>
