<template>
  <div class="w-full p-4">
    <div class="flex flex-wrap justify-center gap-10 font-futuraRegular text-xs lg:text-xl">
      <p @click="scrollTo('home')" class="cursor-pointer">HOME</p>
      <p @click="scrollTo('date')" class="cursor-pointer">DATE</p>
      <p @click="scrollTo('attire')" class="cursor-pointer">ATTIRE GUIDE</p>
      <p @click="scrollTo('entourage')" class="cursor-pointer">ENTOURAGE</p>
      <p @click="scrollTo('faq')" class="cursor-pointer">FAQ</p>
      <p @click="scrollTo('rsvp')" class="cursor-pointer">RSVP</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Create a function that scrolls smoothly to an element with the given id
const scrollTo = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
