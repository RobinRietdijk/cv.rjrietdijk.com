<template>
  <div>
    <Hero />

    <div class="sect sect-about sect-first">
      <div class="deco ring-tr" />
      <v-container style="position: relative; z-index: 1;">
        <About />
      </v-container>
    </div>

    <div class="sect sect-portfolio">
      <div class="deco dots-bl" />
      <v-container style="position: relative; z-index: 1;">
        <Portfolio />
      </v-container>
    </div>

    <div class="sect sect-timeline">
      <div class="deco ring-bl" />
      <v-container style="position: relative; z-index: 1;">
        <Timeline />
      </v-container>
    </div>

    <div class="sect sect-skills">
      <div class="deco dots-tr" />
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
.sect {
  padding: 96px 0;
  position: relative;
  overflow: hidden;
}

.sect-about {
  background: rgba(255, 255, 255, 0.86);
  position: relative;
}

.sect-about::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 80px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.45), transparent);
  pointer-events: none;
  z-index: 2;
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

.deco {
  position: absolute;
  pointer-events: none;
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
