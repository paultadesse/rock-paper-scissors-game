<template lang="">
  <div
    class="relative min-h-screen h-0 bg-gradient-to-b from-blueDark to-blueDarker font-BarlowCondensed"
  >
    <div class="w-full xl:pt-20 pt-10 p-8">
      <div
        class="flex items-center xl:p-5 p-4 justify-between border-2 border-gray-500 rounded-lg max-w-2xl mx-auto"
      >
        <div
          class="text-white uppercase xl:text-4xl font-bold tracking-tighter"
        >
          <img
            class="h-24 xl:h-full"
            src="../../static/images/logo-bonus.svg"
            alt=""
            srcset=""
          />
        </div>

        <div
          :class="
            score < 0
              ? 'bg-rockDark text-white'
              : score > 0
              ? 'bg-green-600 text-white'
              : 'bg-white'
          "
          class="uppercase text-center p-3 px-7 rounded-lg"
        >
          <div class="text-sm tracking-widest">score</div>
          <transition
            duration="200"
            enter-class="transform -translate-x-0 opacity-0 scale-0"
            enter-to-class="transform translate-x-0 opacity-90 scale-100"
            leave-class="transform -translate-x-0 opacity-0"
            leave-to-class="transform -translate-x-0 opacity-0"
            enter-active-class="transition"
            leave-active-class="transition"
            mode="out-in"
          >
            <div
              :key="score"
              :class="score < 0 ? '-ml-3' : ''"
              class="text-5xl font-extrabold"
            >
              {{ score }}
            </div>
          </transition>
        </div>
      </div>
    </div>
    <transition
      duration="200"
      enter-class="transform -translate-x-0 opacity-0 scale-0"
      enter-to-class="transform translate-x-0 opacity-90 scale-100"
      leave-class="transform -translate-x-0 opacity-0"
      leave-to-class="transform -translate-x-0 opacity-0"
      enter-active-class="transition"
      leave-active-class="transition"
      mode="out-in"
    >
      <div
        :key="gameStarted"
        v-if="!gameStarted"
        class="relative xl:mt-40 mt-28 max-w-xs mx-auto flex justify-center"
      >
        <!-- scissors -->
        <div
          class="absolute xl:left-10 xl:-top-48 left-16 -top-24"
          @click="pickComponent('Scissor')"
        >
          <Scissor />
        </div>

        <!-- spock -->
        <div
          class="absolute xl:-left-40 xl:-top-10 -left-14 top-10"
          @click="pickComponent('Spock')"
        >
          <Spock />
        </div>

        <!-- paper  -->
        <div
          class="absolute xl:-right-32 xl:-top-10 -right-5 top-10"
          @click="pickComponent('Paper')"
        >
          <Paper />
        </div>

        <!-- rock -->
        <div
          class="absolute xl:-bottom-44 -bottom-24 left-44"
          @click="pickComponent('Rock')"
        >
          <Rock />
        </div>

        <!-- lizard -->
        <div
          class="absolute xl:-bottom-44 xl:-left-20 -left-5 -bottom-24"
          @click="pickComponent('Lizard')"
        >
          <Lizard />
        </div>

        <div class="">
          <img src="../../static/images/bg-pentagon.svg" alt="" srcset="" />
        </div>
      </div>
    </transition>

    <transition
      duration="200"
      enter-class="transform -translate-x-0 opacity-0 scale-0"
      enter-to-class="transform translate-x-0 opacity-90 scale-100"
      leave-class="transform -translate-x-0 opacity-0"
      leave-to-class="transform -translate-x-0 opacity-0"
      enter-active-class="transition"
      leave-active-class="transition"
      mode="out-in"
    >
      <div
        :key="gameStarted"
        v-if="gameStarted"
        class="xl:pt-28 pt-14 -ml-5 xl:ml-0"
      >
        <div class="flex justify-center items-center xl:space-x-72">
          <component
            :is="userPicked"
            :showAnimation="winner === 'user'"
            :picker="'you picked'"
          ></component>
          <div class="xl:hidden px-8"></div>
          <div
            class="hidden xl:flex flex-col text-center items-center text-white font-bold tracking-wider xl:text-2xl uppercase"
          >
            <div v-if="itsAtie" class="py-4 text-5xl">it's a tie</div>
            <div v-else>
              <div v-if="winner === 'house'" class="py-4 text-5xl">
                You Lose
              </div>
              <div v-if="winner === 'user'" class="py-4 text-5xl">You win</div>
            </div>
            <button
              class="bg-white text-black px-16 rounded py-3 tracking-widest uppercase hover:text-red-700 text-md"
              @click="restartGame"
            >
              Play again
            </button>
          </div>
          <component
            :is="housePicked"
            :showAnimation="winner === 'house'"
            :picker="'the house picked'"
          ></component>
        </div>
      </div>
    </transition>

    <div v-if="gameStarted" class="flex justify-center pt-9">
      <div
        class="xl:hidden flex flex-col text-center items-center text-white font-bold tracking-wider xl:text-2xl uppercase"
      >
        <div v-if="itsAtie" class="py-4 text-5xl">it's a tie</div>
        <div v-else>
          <div v-if="winner === 'house'" class="py-4 text-5xl">You Lose</div>
          <div v-if="winner === 'user'" class="py-4 text-5xl">You win</div>
        </div>
        <button
          class="bg-white text-black px-16 rounded py-3 tracking-widest uppercase text-sm"
          @click="restartGame"
        >
          Play again
        </button>
      </div>
    </div>

    <!-- bottom buttons -->
    <div class="absolute w-full xl:bottom-10 bottom-5">
      <div class="">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import Paper from "../circles/Paper.vue";
import Rock from "../circles/Rock.vue";
import Scissor from "../circles/Scissor.vue";
import Lizard from "../circles/Lizard.vue";
import Spock from "../circles/Spock.vue";
export default {
  components: {
    Paper: Paper,
    Rock: Rock,
    Scissor: Scissor,
    Lizard: Lizard,
    Spock: Spock,
  },

  data() {
    return {
      score: 0,
      showRules: false,
      userPicked: null,
      housePicked: null,
      gameStarted: false,
      winner: "",
      itsAtie: false,
      components: ["Paper", "Scissor", "Rock", "Lizard", "Spock"],

      //might put it in a separate js file for advanced mode...
      gameRule: [
        { value: "Rock", beats: ["Scissor", "Lizard"] },
        { value: "Paper", beats: ["Rock", "Spock"] },
        { value: "Scissor", beats: ["Paper", "Lizard"] },
        { value: "Lizard", beats: ["Paper", "Spock"] },
        { value: "Spock", beats: ["Rock", "Scissor"] },
      ],
    };
  },
  created() {
    this.score = 0;
  },

  methods: {
    pickComponent(component) {
      this.gameStarted = true;
      this.userPicked = component;
      this.housePicked = this.getRandomComponent();

      this.checkTheWinner(this.userPicked, this.housePicked);

      this.updateScore(this.winner);
    },

    restartGame() {
      this.gameStarted = false;
      this.itsAtie = false;
      this.winner = null;
    },

    checkTheWinner(user, house) {
      if (user === house) {
        this.itsAtie = true;
        return;
      }
      switch (user) {
        case "Rock": {
          const result = this.gameRule.find(({ value }) => value === "Rock");
          result.beats.includes(house)
            ? (this.winner = "user")
            : (this.winner = "house");
          break;
        }
        case "Paper": {
          const result = this.gameRule.find(({ value }) => value === "Paper");
          result.beats.includes(house)
            ? (this.winner = "user")
            : (this.winner = "house");
          break;
        }
        case "Scissor": {
          const result = this.gameRule.find(({ value }) => value === "Scissor");
          result.beats.includes(house)
            ? (this.winner = "user")
            : (this.winner = "house");
          break;
        }
        case "Lizard": {
          const result = this.gameRule.find(({ value }) => value === "Lizard");
          result.beats.includes(house)
            ? (this.winner = "user")
            : (this.winner = "house");
          break;
        }
        case "Spock": {
          const result = this.gameRule.find(({ value }) => value === "Spock");
          result.beats.includes(house)
            ? (this.winner = "user")
            : (this.winner = "house");
          break;
        }

        default:
          break;
      }
    },
    getRandomComponent() {
      return this.components[
        Math.floor(Math.random() * this.components.length)
      ];
    },

    updateScore(winner) {
      switch (winner) {
        case "user":
          this.score += 5;
          break;
        case "house":
          this.score -= 5;
        default:
          break;
      }
    },
  },
};
</script>
<style lang=""></style>
