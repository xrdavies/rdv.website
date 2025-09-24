<template>
  <div class="philosophy" id="Investment">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="bg1title">{{ content.philosophy.title }}</div>
        </div>
      </div>
      <div class="phCont">
        <div class="row">
          <div
            v-for="(item, index) in content.philosophy.list"
            :key="index"
            class="col-6 col-sm-6 col-lg-3"
          >
            <img :src="`/assets/images/icon0${index + 1}.png`" :alt="item.liTitle">
            <div class="title">{{ item.liTitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { content } from '../../data/content.js'
</script>