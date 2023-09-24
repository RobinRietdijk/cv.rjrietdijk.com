<template>
  <section>
    <Hero />

    <v-container class="py-5 px-0" fluid>
      <About />
      <Services />
      <Timeline />
      <Skills />
      <Portfolio />
      <!-- <Contact /> -->
    </v-container>
  </section>
</template>

<script setup>
import Hero from "@/components/home/Hero.vue"
import About from "@/components/home/About.vue"
import Services from "@/components/home/Services.vue"
import Timeline from "@/components/home/Timeline.vue"
import Skills from "@/components/home/Skills.vue"
import Portfolio from "@/components/home/Portfolio.vue"
// import Contact from "@/components/home/Contact.vue"
</script>
