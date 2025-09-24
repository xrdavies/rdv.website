<template>
  <div class="banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1 v-html="content.banner.title"></h1>
          <div class="desc">{{ content.banner.description }}</div>
          <div class="nameAll">
            <dl>
              <dt><img src="/assets/images/round.png" alt=""></dt>
              <dd>{{ content.banner.driven }}</dd>
              <dt><img src="/assets/images/triangular.png" alt=""></dt>
              <dd>{{ content.banner.community }}</dd>
            </dl>
            <dl>
              <dt><img src="/assets/images/rectangle.png" alt=""></dt>
              <dd>{{ content.banner.ocommunity }}</dd>
              <dt><img src="/assets/images/rhombus.png" alt=""></dt>
              <dd>{{ content.banner.public }}</dd>
            </dl>
          </div>
        </div>
        <div class="col-lg-6 bannerRht">
          <img src="/assets/images/PathCopy.png" alt="" class="bulb">
          <img src="/assets/images/banner.png" alt="" class="lightImg">
          <div class="light">
            <img src="/assets/images/light.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { content } from '../../data/content.js'
</script>