<template lang="">
  <div>
    <!-- <Easy /> -->
    <component :is="selectedMode">
      <button
        class="border hover:bg-white hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 border-white px-10 py-2 block text-white rounded-lg xl:text-sm text-sm tracking-widest uppercase"
      >
        Advanced
      </button>

      <button
        @click="showRules = !showRules"
        class="border hover:bg-white hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 border-white px-10 py-2 block text-white rounded-lg xl:text-sm text-sm tracking-widest uppercase"
      >
        Rules
      </button>
    </component>
    <div v-if="showRules">
      <RuleModal @toggle-modal="showModal" />
    </div>
  </div>
</template>
<script>
import RuleModal from "./modals/RuleModal.vue";
import Easy from "./game-modes/Easy.vue";
export default {
  components: {
    Easy: Easy,
    RuleModal,
  },

  data() {
    return {
      selectedMode: Easy,
      showRules: false,
    };
  },

  methods: {
    showModal() {
      this.showRules = !this.showRules;
    },
  },
};
</script>
<style lang=""></style>
