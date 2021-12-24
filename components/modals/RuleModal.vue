<template lang="">
  <div>
    <div class="">
      <div class="absolute inset-0 opacity-50 h-screen w-full bg-black"></div>
      <div class="absolute inset-0">
        <div class="">
          <div class="flex justify-center">
            <div
              class="absolute top-1/3 bg-white xl:max-w-sm z-50 p-10 rounded-xl"
            >
              <div class="flex justify-between items-center pb-7">
                <div class="uppercase text-3xl font-bold">rules</div>
                <div class="cursor-pointer">
                  <svg
                    @click="closeModal"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <img
                class="h-52 xl:h-full"
                :src="ruleFor === 'easy' ? advanced : easy"
                :key="ruleFor"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import easyRule from "../../static/images/image-rules.svg";
import advancedRule from "../../static/images/image-rules-bonus.svg";
export default {
  props: {
    ruleFor: String,
    methods: {
      type: Function,
    },
  },
  data() {
    return {
      easy: easyRule,
      advanced: advancedRule,
    };
  },

  created() {},

  methods: {
    closeModal() {
      this.$emit("toggle-modal");
    },
  },
};
</script>
<style lang=""></style>
