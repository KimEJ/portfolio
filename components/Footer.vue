<template>
  <div class="footer-section">
    <footer>
      <div class="social-icons-and-navigation">
        <!-- nav - start -->
        <nav v-if="showNav">
          <a
            v-for="(item, index) in navigation"
            :key="item.id"
            :href="item.href"
            class="footerBtn"
            >{{ item.name }}</a
          >
          <!-- <a href="/#about" class="footerBtn">About</a>
          <a href="/#skills" class="footerBtn">Skills</a>
          <a href="/#works" class="footerBtn">Works</a>
          <a href="/#projects" class="footerBtn">Projects</a>
          <a href="/#contact" class="footerBtn">Contact</a> -->
        </nav>
        <!-- nav - end -->


        <!-- social - start -->
        <div>
          <a
            href="https://www.instagram.com/zztous__f/"
            aria-label="Instagram"
            target="_blank"
            class="footerIcon"
          >
            <IconsInstaIcon />
          </a>

          <a
            href="https://github.com/KimEJ"
            aria-label="Github"
            target="_blank"
            class="footerIcon"
          >
            <IconsGithubIcon />
          </a>

          <a
            href="https://KimEJ.github.io"
            aria-label="blog"
            target="_blank"
            class="footerIcon"
          >
            <IconsBlogIcon />
          </a>
        </div>
        <!-- social - end -->
      </div>

      <div class="copyright">
        © {{ CURRENT_YEAR }} - Present Kim E.J. All rights reserved. <br /> And Thanks to <a href="https://github.com/eazypau" target="_blank" class="underline">Po YZ</a>!
      </div>
    </footer>
  </div>
</template>
<script setup>
// utils and hooks
const CURRENT_YEAR = new Date().getFullYear();
</script>
