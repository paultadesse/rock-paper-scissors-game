<template lang="">
  <div
    class="relative min-h-screen h-0 bg-gradient-to-b from-blueDark to-blueDarker"
  >
    <div class="flex flex-col h-screen justify-between items-center">
      <div class="mt-16 w-full">
        <div
          class="flex items-center p-7 justify-between border-2 border-gray-500 rounded-lg max-w-2xl mx-auto"
        >
          <div class="text-white uppercase text-4xl font-bold tracking-tighter">
            <div>rock</div>
            <div>paper</div>
            <div>scissors</div>
          </div>
          <div>
            <div class="uppercase text-center bg-white p-3 px-7 rounded-lg">
              <div class="text-sm tracking-widest">score</div>
              <div class="text-5xl font-extrabold">12</div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <!-- paper  -->
        <Paper />
        <!-- scissors -->
        <Scissor />
        <!-- rock -->
        <Rock />

        <svg xmlns="http://www.w3.org/2000/svg" width="305" height="277">
          <path
            fill="none"
            stroke="#000"
            stroke-width="15"
            d="M291.5 7.5H4.574c3.119 0 52.416 84.667 147.892 254L291.5 7.5z"
            opacity=".2"
          />
        </svg>
      </div>
      <div class="flex justify-end w-full mr-20 mb-9">
        <button
          class="border border-white px-10 py-2 block text-white rounded-lg text-sm uppercase"
        >
          Rules
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Paper from "./circles/Paper.vue";
import Rock from "./circles/Rock.vue";
import Scissor from "./circles/Scissor.vue";
export default {
  components: {
    Paper,
    Rock,
    Scissor,
  },
};
</script>
<style lang=""></style>
