<template>
  <div class="footer-section">
    <footer>
      <div class="social-icons-and-navigation">

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
