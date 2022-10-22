<template>
  <div id="indexPage">
    <h1>Ostracods fun!</h1>
    <div style="margin-bottom: 16px">Know more about Ostracods through game</div>
    <a-button
      block
      style="display: none; margin-bottom: 16px"
      @click="toGamePage(easyGameConfig)"
    >
      Easy Mode
    </a-button>
    <a-button
      block
      style="margin-bottom: 16px"
      @click="toGamePage(middleGameConfig)"
    >
      Mobile
    </a-button>
    <a-button
      block
      style="display: none; margin-bottom: 16px"
      @click="toGamePage(hardGameConfig)"
    >
      Hard Mode
    </a-button>
    <a-button
      block
      style="display: none; margin-bottom: 16px"
      @click="toGamePage(lunaticGameConfig)"
    >
      Lunatic Mode
    </a-button>
    <a-button
      block
      style="display: none; margin-bottom: 16px"
      @click="toGamePage(skyGameConfig)"
    >
      Sky mode
    </a-button>
    <a-button
      block
      style="display: none; margin-bottom: 16px"
      @click="toGamePage(yangGameConfig)"
    >
      Orginal mode
    </a-button>
    <a-button block style="margin-bottom: 16px" @click="() => toGamePage()">
      Desktop
    </a-button>
    <div class="footer" style="display: none;">
      鱼了个鱼 ©2022 by
      <a href="https://github.com/liyupi" target="_blank" style="color: #fff">
        程序员鱼皮
      </a>
      |
      <a
        href="https://github.com/liyupi/yulegeyu"
        target="_blank"
        style="color: #fff"
      >
        代码开源
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import {
  easyGameConfig,
  middleGameConfig,
  hardGameConfig,
  lunaticGameConfig,
  skyGameConfig,
  yangGameConfig,
} from "../core/gameConfig";
import { useGlobalStore } from "../core/globalStore";
import MyAd from "../components/MyAd.vue";

const router = useRouter();

const { setGameConfig } = useGlobalStore();

const toGamePage = (config?: GameConfigType) => {
  if (config) {
    setGameConfig(config);
    router.push("/game");
  } else {
    setGameConfig(hardGameConfig)
    router.push("/config");
  }
};
</script>

<style scoped>
#indexPage {
  text-align: center;
}

.footer {
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 12px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
