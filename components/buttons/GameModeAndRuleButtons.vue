<template lang="">
  <div class="flex justify-between xl:px-10 px-5">
    <button
      @click="changeGame(mode)"
      class="border hover:bg-white hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 border-white px-10 py-2 block text-white rounded-lg xl:text-sm text-sm tracking-widest uppercase"
    >
      {{ mode }}
    </button>

    <button
      @click="toggleModal"
      class="border hover:bg-white hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 border-white px-10 py-2 block text-white rounded-lg xl:text-sm text-sm tracking-widest uppercase"
    >
      Rules
    </button>
  </div>
</template>
<script>
export default {
  props: {
    mode: String,
    methods: {
      type: Function,
    },
  },
  data() {
    return {};
  },

  created() {},

  methods: {
    toggleModal() {
      this.$emit("toggle-modal");
    },

    changeGame(){
        this.$emit("switch-game-mode")
    }
  },
};
</script>
<style lang=""></style>
