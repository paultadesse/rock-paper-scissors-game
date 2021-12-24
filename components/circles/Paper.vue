<template lang="">
  <div class="relative flex">
    <div
      class="cursor-pointer flex flex-col items-center text-justify justify-around"
    >
      <!-- test  -->
      <div class="flex flex-col items-center">
        <div
          class="xl:block hidden mb-9 text-center text-white font-bold tracking-wider xl:text-2xl text-sm uppercase"
        >
          {{ picker }}
        </div>
        <div class="relative xl:h-52 xl:w-52 h-36 w-36 rounded-full mb-9">
          <!-- bacgraund animation -->

          <div v-if="showAnimation" class="animate-pulse overflow-hidden">
            <div
              class="absolute xl:-left-20 -left-14 opacity-10 xl:-top-24 -top-16 xl:h-96 xl:w-96 h-72 w-72 bg-white rounded-full"
            ></div>
            <div
              class="absolute xl:-left-12 -left-8 opacity-10 xl:-top-16 -top-11 xl:h-80 xl:w-80 h-60 w-60 bg-white rounded-full"
            ></div>
            <div
              class="absolute xl:-left-4 -left-2 opacity-10 xl:-top-8 -top-4 xl:h-64 xl:w-64 h-48 w-48 bg-white rounded-full"
            ></div>
          </div>
          <div
            class="absolute xl:h-52 xl:w-52 h-40 w-40 scale-95 left-2 bg-paperDarker rounded-full opacity-70"
          ></div>
          <div
            class="absolute left-4 xl:h-48 xl:w-48 h-36 w-36 bg-paperDark rounded-full"
          ></div>
          <div
            class="absolute xl:left-8 xl:top-4 left-8 top-4 xl:h-40 xl:w-40 h-28 w-28 bg-white rounded-full"
          >
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <img src="../../static/images/icon-paper.svg" alt="" srcset="" />
            </div>
          </div>
        </div>
        <div
          class="xl:hidden ml-7 block text-center text-white font-bold tracking-wider xl:text-2xl text-sm uppercase"
        >
          {{ picker }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["showAnimation", "picker"],
};
</script>
<style lang=""></style>
