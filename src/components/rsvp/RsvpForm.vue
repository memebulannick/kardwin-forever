<script setup lang="ts">
import { ref } from 'vue'

const available = ref('')
const name = ref('')
const seats = ref()
</script>

<template>
  <div class="max-w-md mx-auto text-center font-futuraRegular">
    <div class="my-12">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdkfyPTC7KA9idMjnZlosPbppp6UMmUrp3s9dfLXvmH4_GbMg/viewform" target="_blank">
        <div class="flex-1 relative border-black py-12 my-2">
            <p class="font-bold text-4xl relative z-0 font-leagueScriptRegular py-6">RSVP</p>
            <img
              src="../../assets/images/drawing_heart.png"
              alt="Heart"
              class="absolute top-0 left-0 w-full h-full object-contain z-10"
            />
        </div>
        <p class="text-xl font-futuraRegular font-bold">Click here to RSVP!</p>
      </a>
    </div>


    <!-- Name Input -->
    <!-- <div class="m-6">
      <p class="uppercase tracking-wide text-sm mb-2">Enter your name:</p>
      <input type="text" v-model="name" class="w-full border border-gray-400 py-2 px-3 rounded-md" />
    </div> -->

    <!-- Seats Input -->
    <!-- <div class="m-6">
      <p class="uppercase tracking-wide text-sm mb-2">Number of seat(s) reserved</p>
      <input type="number" v-model="seats" class="w-full border border-gray-400 py-2 px-3 rounded-md" />
    </div> -->

    <!-- Note -->
    <p class="text-xl font-bold uppercase tracking-wide">Kindly respond by April 27, 2025</p>
  </div>
</template>
