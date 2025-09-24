<template>
  <header>
    <div class="container">
      <nav class="row navbar navbar-expand-md">
        <div class="col-8 col-sm-8 col-lg-2 logo">
          <img src="/assets/images/LOGO.png" alt="Rebase D. Ventures">
        </div>
        <div class="col-4 col-sm-4 col-lg-10 rht" id="navRht">
          <button class="navbar-toggler" id="navBtn">
            <span class="navbar-toggler-icon">
              <img src="/assets/images/hb.png" alt="">
            </span>
          </button>
          <div class="navRhtBrdr">
            <div class="navInner">
              <div class="logo375">
                <img src="/assets/images/LOGO.png" alt="" class="logoRht">
                <img src="/assets/images/close.png" alt="" class="closeRht" id="close">
              </div>
              <ul class="nav-rht justify-content-end">
                <li class="nav-item">
                  <a class="nav-link active" href="#home">{{ content.nav.Home }}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Investment">{{ content.nav.Investment }}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Members">{{ content.nav.Members }}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Projects">{{ content.nav.Projects }}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Contact">{{ content.nav.Contact }}</a>
                </li>
              </ul>
            </div>
            <div class="mask"></div>
          </div>
        </div>
        <div class="col-4 col-sm-4 col-lg-10 rht" id="navbar">
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" href="#home">{{ content.nav.Home }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Investment">{{ content.nav.Investment }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Members">{{ content.nav.Members }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Projects">{{ content.nav.Projects }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Contact">{{ content.nav.Contact }}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { content } from '../../data/content.js'
</script>