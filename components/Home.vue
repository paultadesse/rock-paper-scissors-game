<template lang="">
  <div>
    <!-- Initial the game is set to easy mode ! -->
    <component :is="selectedMode">
      <!-- i use slot in the child components  -->
      <GameModeAndRuleButtons
        @toggle-modal="showModal"
        @switch-game-mode="changeGameMode(selectButton)"
        :mode="selectButton"
      />
    </component>

    <!-- modal rendered base on selected game mode  -->
    <div v-if="showRules">
      <RuleModal @toggle-modal="showModal" :ruleFor="selectButton" />
    </div>
  </div>
</template>
<script>
import RuleModal from "./modals/RuleModal.vue";
import Easy from "./game-modes/Easy.vue";
import Advanced from "./game-modes/Advanced.vue";
import GameModeAndRuleButtons from "./buttons/GameModeAndRuleButtons.vue";
export default {
  components: {
    Easy: Easy,
    Advanced: Advanced,
    RuleModal,
    GameModeAndRuleButtons,
  },

  data() {
    return {
      selectedMode: Easy,
      showRules: false,
      selectButton: "advanced",
    };
  },

  methods: {
    changeGameMode(selected) {
      switch (selected) {
        case "advanced":
          this.selectedMode = Advanced;
          this.selectButton = "easy";
          break;
        case "easy":
          this.selectedMode = Easy;
          this.selectButton = "advanced";
          break;

        default:
          break;
      }
      this.selectedMode = selected;
    },

    showModal() {
      this.showRules = !this.showRules;
    },
  },
};
</script>
<style lang=""></style>
