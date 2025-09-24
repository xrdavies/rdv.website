<template>
  <div class="projects" id="Projects">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="bg2title">{{ content.projects.title }}</div>
        </div>
      </div>
      <div class="row">
        <div class="projectBrdr" id="sourceDiv">
          <ul>
            <li v-for="(item, index) in content.projects.list" :key="index">
              <div class="firstTR">
                <div class="tit">{{ item.title }}</div>
                <div class="logoA">
                  <img :src="item.image" :alt="item.title">
                </div>
              </div>
              <div class="desc">{{ item.desc }}</div>
              <div v-if="item.href">
                <a :href="item.href" target="_blank">{{ item.href }}</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { content } from '../../data/content.js'
</script>