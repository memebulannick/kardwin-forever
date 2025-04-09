<script setup lang="ts">
import RsvpHeader from '../components/rsvp/RsvpHeader.vue'
import RsvpForm from '../components/rsvp/RsvpForm.vue'
import RsvpFooter from '../components/rsvp/RsvpFooter.vue'
</script>

<template>
  <div>
    <RsvpHeader />
    <section id="rsvp" class="scroll-mt-[200px]">
      <RsvpForm />
    </section>
    <RsvpFooter />
  </div>
</template>

<style scoped>

</style>
