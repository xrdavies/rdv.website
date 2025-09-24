<template>
  <div class="members" id="Members">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="topTit" v-html="content.members.title"></div>
        </div>
      </div>
      <ul class="row member">
        <li
          v-for="(item, index) in content.members.list"
          :key="index"
          class="col-6 col-sm-6 col-md-6 col-lg-4"
        >
          <img :src="item.image" :alt="item.name">
          <div class="nameTop">{{ item.name }}</div>
          <div class="desc">{{ item.desc }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { content } from '../../data/content.js'
</script>