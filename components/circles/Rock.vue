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
        <div
          class="relative xl:h-52 xl:w-52 h-36 w-36 rounded-full mb-9 overflow-clip"
        >
          <!-- bacgraund animation -->

          <div v-if="showAnimation" class="animate-pulse overflow-clip">
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
            class="absolute xl:h-52 xl:w-52 h-40 w-40 scale-95 left-2 bg-rockDarker rounded-full opacity-70"
          ></div>
          <div
            class="absolute left-4 xl:h-48 xl:w-48 h-36 w-36 bg-rockDark rounded-full"
          ></div>
          <div
            class="absolute xl:left-8 xl:top-4 left-8 top-4 xl:h-40 xl:w-40 h-28 w-28 bg-white rounded-full"
          ></div>
          <div class="absolute"></div>
          <div class="absolute"></div>
          <div class="absolute inset-0">
            <div class="absolute xl:top-16 xl:left-20 top-10 left-14 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                <path
                  fill="#3B4262"
                  d="M45.06 12.22c-.642-8.096-9.734-7.269-9.734-7.269-3.837-6.765-9.832-1.865-9.832-1.865-4.606-6.63-10.38-.486-10.38-.486-9.957-1.074-9.571 7.066-9.571 7.066-.234 2.588 1.403 10.593 1.403 10.593-1.477-4.614-4.68-.784-4.68-.784-3.94 6.078-.975 9.405-.975 9.405 5.33 6.246 16.688 13.743 16.688 13.743 4.113 2.356 2.373 4.457 2.373 4.457l24.876-4.11.571-4.718c3.782-11.436-.739-26.032-.739-26.032z"
                />
              </svg>
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
