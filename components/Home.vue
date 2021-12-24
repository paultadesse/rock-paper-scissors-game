<template lang="">
  <div
    class="relative min-h-screen h-0 bg-gradient-to-b from-blueDark to-blueDarker font-BarlowCondensed"
  >
    <div class="w-full xl:pt-20 pt-10 p-8">
      <div
        class="flex items-center xl:p-7 p-4 justify-between border-2 border-gray-500 rounded-lg max-w-2xl mx-auto"
      >
        <div
          class="text-white uppercase xl:text-4xl font-bold tracking-tighter"
        >
          <img
            class="h-20 xl:h-full"
            src="../static/images/logo.svg"
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
        <!-- paper  -->
        <div
          class="absolute xl:-left-20 xl:-top-28 -left-7 -top-10"
          @click="pickComponent('Paper')"
        >
          <Paper />
        </div>

        <!-- scissors -->
        <div
          class="absolute xl:-right-20 xl:-top-28 right-0 -top-10"
          @click="pickComponent('Scissor')"
        >
          <Scissor />
        </div>

        <!-- rock -->
        <div
          class="absolute xl:-bottom-28 -bottom-10"
          @click="pickComponent('Rock')"
        >
          <Rock />
        </div>

        <div class="">
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

    <!-- rules for gameplay -->
    <div v-if="showRules" class="">
      <div  class="absolute inset-0 opacity-50 h-screen w-full bg-black"></div>
      <div  class="absolute inset-0 ">
        <div class="">
          <div class="flex justify-center">
            <div
              class="absolute top-1/3 bg-white xl:max-w-sm z-50 p-10 rounded-xl"
            >
              <div class="flex justify-between items-center pb-7">
                <div class="uppercase text-3xl font-bold">rules</div>
                <div class="cursor-pointer">
                  <svg
                    @click="showRules = !showRules"
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
                src="../static/images/image-rules.svg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute w-full xl:bottom-10 bottom-5">
      <div class="flex justify-between xl:px-10 px-5">
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
    Paper: Paper,
    Rock: Rock,
    Scissor: Scissor,
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
      components: ["Paper", "Scissor", "Rock"],

      //might put it in a separate js file for advanced mode...
      gameRule: [
        { value: "Rock", beats: ["Scissor"] },
        { value: "Paper", beats: ["Rock"] },
        { value: "Scissor", beats: ["Paper"] },
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
