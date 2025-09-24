<template>
  <div class="custom-layout">
    <div id="topBtn"></div>
    <Header />
    <div class="maincontent" id="home">
      <Banner />
      <Philosophy />
      <Members />
      <Projects />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import Philosophy from './components/Philosophy.vue'
import Members from './components/Members.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  // Add smooth scrolling behavior
  document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
      e.preventDefault()
      const target = document.querySelector(e.target.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  })

  // Initialize interactive functionality without jQuery
  setTimeout(() => {
    // Initialize after DOM is ready

    // Mobile menu toggle functionality
    const navBtn = document.getElementById('navBtn')
    const navRhtBrdr = document.querySelector('.navRhtBrdr')
    const closeBtn = document.getElementById('close')

    if (navBtn && navRhtBrdr) {
      navBtn.addEventListener('click', () => {
        navRhtBrdr.style.display = 'block'
      })
    }

    if (closeBtn && navRhtBrdr) {
      closeBtn.addEventListener('click', () => {
        navRhtBrdr.style.display = 'none'
      })
    }

    // Member hover effects
    const memberItems = document.querySelectorAll('.member li')
    memberItems.forEach(item => {
      item.addEventListener('click', () => {
        if (item.classList.contains('hover')) {
          item.classList.remove('hover')
        } else {
          memberItems.forEach(other => other.classList.remove('hover'))
          item.classList.add('hover')
        }
      })
    })

    // Scroll to top button
    const topBtn = document.getElementById('topBtn')
    if (topBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          topBtn.style.display = 'block'
        } else {
          topBtn.style.display = 'none'
        }
      })

      topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    }
  }, 100)
})
</script>

<style>
/* Import existing styles */
@import '/assets/css/bootstrap.min.css';
@import '/assets/css/normalize.css';
@import '/assets/fonts/alibaba-font.css';
@import '/assets/fonts/dinCondensedBold.css';
@import '/assets/css/style.css';
@import '/assets/css/mobile.css';

/* Custom VitePress overrides */
.custom-layout {
  font-family: inherit;
}

/* Hide VitePress default styles */
.VPNav,
.VPSidebar,
.VPFooter {
  display: none !important;
}

/* Ensure full width layout */
.Layout {
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

.vp-doc {
  max-width: none !important;
  padding: 0 !important;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>