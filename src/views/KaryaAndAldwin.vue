<script setup lang="ts">
import HeaderKarDwin from '../components/kardwin/HeaderKarDwin.vue'
import NavigationScroll from '../components/kardwin/NavigationScroll.vue'
import CountdownToWedding from '../components/kardwin/CountdownToWedding.vue'
import WeddingDate from '../components/kardwin/WeddingDate.vue'
import WeddingVenue from '../components/kardwin/WeddingVenue.vue'
import AttireGuide from '../components/kardwin/AttireGuide.vue'
import FooterKarDwin from '../components/kardwin/FooterKarDwin.vue'
</script>

<template>
  <div>
    <div class="fixed top-0 left-0 w-full z-50 bg-primary-bg">
      <HeaderKarDwin />
      <NavigationScroll />
    </div>

    <!-- Spacer to prevent content from being hidden behind fixed nav -->
    <div class="h-[180px]"></div> <!-- adjust this based on Header + Nav height -->
    <section id="home" class="scroll-mt-[200px]">
      <CountdownToWedding />
    </section>
    <section id="date" class="scroll-mt-[200px]">
      <WeddingDate />
    </section>
    <WeddingVenue />
    <section id="attire" class="scroll-mt-[200px]">
      <AttireGuide />
    </section>
    <FooterKarDwin />
  </div>
</template>

<style scoped>

</style>
