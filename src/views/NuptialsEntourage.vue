<script setup lang="ts">
import HeaderNuptials from '../components/nuptials/HeaderNuptials.vue'
import WeddingParents from '../components/nuptials/WeddingParents.vue'
import PrincipalSponsors from '../components/nuptials/PrincipalSponsors.vue'
import MaidAndMen from '../components/nuptials/MaidAndMen.vue'
import SecondarySponsors from '../components/nuptials/SecondarySponsors.vue'
import WeddingFaqs from '../components/nuptials/WeddingFaqs.vue'
</script>

<template>
  <div>
    <section id="entourage" class="scroll-mt-[200px]">
      <HeaderNuptials />
    </section>
    <WeddingParents />
    <PrincipalSponsors />
    <MaidAndMen />
    <SecondarySponsors />
    <section id="faq" class="scroll-mt-[200px]">
      <WeddingFaqs />
    </section>
  </div>
</template>

<style scoped>

</style>
