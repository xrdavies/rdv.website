<template>
  <footer id="Contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="know">{{ content.footer.title }}</div>
          <div class="show">
            <a href="https://tally.so/r/w5jj9E">{{ content.footer.button }}</a>
          </div>
          <div class="contactbrdr">
            <img :src="content.footer.image" alt="" class="qrcode">
            <div class="cont">
              <div class="nameTop">{{ content.footer.name }}</div>
              <div class="desc">{{ content.footer.desc }}</div>
            </div>
            <div class="contBg">
              <img src="/assets/images/bg.png" alt="">
            </div>
          </div>
          <div class="copyright">{{ content.copyright }}</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { content } from '../../data/content.js'
</script>