<template>
  <div class="flex flex-col my-8 items-center justify-center overflow-hidden font-futuraRegular">
    <p class="text-xs tracking-widest">JUNE 20, 2025 FRIDAY</p>

    <!-- Countdown Numbers Grid or Message -->
    <div class="flex flex-row gap-3 text-4xl font-bold">
      <template v-if="!weddingStarted">
        <!-- DAYS -->
        <div class="flex flex-col items-center">
          <span>{{ days }}</span>
          <span class="text-xs">DAYS</span>
        </div>
        <span>:</span>

        <!-- HOURS -->
        <div class="flex flex-col items-center">
          <span>{{ hours }}</span>
          <span class="text-xs">HOURS</span>
        </div>
        <span>:</span>

        <!-- MINUTES -->
        <div class="flex flex-col items-center">
          <span>{{ minutes }}</span>
          <span class="text-xs">MINUTES</span>
        </div>
        <span>:</span>

        <!-- SECONDS -->
        <div class="flex flex-col items-center">
          <span>{{ seconds }}</span>
          <span class="text-xs">SECONDS</span>
        </div>
      </template>
      <template v-else>
        <div class="p-4 text-center text-xl sm:text-4xl font-leagueScriptRegular">
          Karya and Aldwin has tied the knot!
        </div>
      </template>
    </div>


    <img
      src="../../assets/images/img_countdown.jpg"
      alt="KarDwin NMAX"
      class="w-full mt-12"
    />
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const weddingStarted = ref(false)
const targetDate = new Date('2025-06-20T15:00:00').getTime()

const days = ref('00')
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')

let timer: number

function updateCountdown() {
  const now = new Date().getTime()
  const distance = targetDate - now

  if (distance < 0) {
    weddingStarted.value = true
    clearInterval(timer)
    return
  }

  const d = Math.floor(distance / (1000 * 60 * 60 * 24))
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const s = Math.floor((distance % (1000 * 60)) / 1000)

  days.value = d.toString().padStart(2, '0')
  hours.value = h.toString().padStart(2, '0')
  minutes.value = m.toString().padStart(2, '0')
  seconds.value = s.toString().padStart(2, '0')
}


onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000) // every second
})

onUnmounted(() => clearInterval(timer))
</script>
