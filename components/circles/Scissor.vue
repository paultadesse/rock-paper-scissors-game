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
            class="absolute xl:h-52 xl:w-52 h-40 w-40 scale-95 left-2 bg-scissorDarker rounded-full opacity-70"
          ></div>
          <div
            class="absolute left-4 xl:h-48 xl:w-48 h-36 w-36 bg-scissorDark rounded-full"
          ></div>
          <div
            class="absolute xl:left-8 xl:top-4 left-8 top-4 xl:h-40 xl:w-40 h-28 w-28 bg-white rounded-full"
          ></div>
          <div class="absolute"></div>
          <div class="absolute"></div>
          <div class="absolute inset-0">
            <div class="absolute xl:top-16 xl:left-20 top-10 left-14 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="51" height="58">
                <path
                  fill="#3B4262"
                  d="M13.971 25.702l6.012-8.415c-2.499-.415-7.088-.507-10.846 3.235C3.212 26.421.812 39.163.312 42.248L15.37 57.24c2.711-.232 14.713-1.827 26.279-13.34.122-.249 2.94-2.321.636-4.614-1.1-1.095-2.919-1.074-4.042.044-.572.57-1.461.577-2.021.02-.56-.557-.552-1.443.02-2.012l4.087-4.069c2.076-2.067.119-5.555-2.78-4.717l-3.345 2.851c-.611.53-1.52.439-2.022-.14-.519-.597-.408-1.503.183-2.013 11.687-10.208 9.98-8.979 17.5-15.995 2.809-2.329-.725-6.447-3.493-4.09L28.182 25.45c-.529.448-1.34.457-1.86-.02-.601-.517-.615-1.262-.222-1.85L38.787 3.944c1.854-2.5-1.795-5.277-3.749-2.757L16.28 27.307c-.452.65-1.364.8-1.985.345a1.377 1.377 0 01-.323-1.95z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          class="xl:hidden  ml-7 block text-center text-white font-bold tracking-wider xl:text-2xl text-sm uppercase"
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
