<template>
  <nav
    id="nav-bar"
    class="navPadding"
    :class="navBgTextColor"
    style="height: 70px"
  >
    <div class="lg:w-1/12">
      <Transition appear name="fadeIn">
        <button
          v-if="!loading"
          type="button"
          aria-label="Website Logo"
          @click="goToHome"
        >
          <img
            class="bg-white"
            :src="logo"
            width="40"
            height="40"
            alt="favicon"
            loading="lazy"
          />
        </button>
      </Transition>
    </div>
    <div v-if="!loading && showNav" class="nav-links">
      <TransitionGroup appear @before-enter="before" @enter="entering">
        <a
          v-for="(item, index) in navigation"
          :key="item.id"
          :data-index="index"
          :href="item.href"
          class="underAnimation"
          >{{ item.name }}</a
        >
      </TransitionGroup>
    </div>
    <div class="lg:w-1/12 flex items-center justify-end gap-4">
      <div class="ml-5 flex items-center">
        <button type="button" aria-label="theme toggle" @click="toggleTheme()">
          <Transition name="fade" mode="out-in">
            <SunIcon v-if="!enabled" class="w-5 h-5" />
            <MoonIcon v-else class="w-5 h-5">Dark mode</MoonIcon>
          </Transition>
        </button>
      </div>
      <Menu v-if="showNav" as="div" class="mobile-hamburger">
        <div class="menu-button">
          <MenuButton aria-label="Menu">
            <Bars3Icon />
          </MenuButton>
        </div>
        <Transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems class="menu-items">
            <div class="menu-item-padding">
              <MenuItem
                v-for="item in navigation"
                :key="item"
                v-slot="{ active }"
              >
                <a
                  :href="item.href"
                  :class="[
                    active ? 'bg-gray-500 text-white' : 'text-gray-900',
                    'group',
                  ]"
                >
                  {{ item.name }}
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  </nav>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { Bars3Icon, MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
import { gsap } from "gsap";
import blackWhiteFavicon from "/favicons/favicon.ico";
import whiteBlackFavicon from "/favicons/favicon.svg";

useHead({
  script: [
    {
      children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }`,
    },
  ],
});

//props
const props = defineProps({
  showNav: {
    type: Boolean,
    default: true,
  },
});

const { enabled, toggleTheme } = useTheme();
let loading = ref(true);
const route = useRoute();
const { scrollTop } = useScrollToTop();
const { trackNavBarPosition, currentOffsetHeight } = useTrackNavBar();
const { navigation } = useConstants();
const screenHeight = ref(0);
const heightOfNav = ref(0);
const currentScreenWidth = ref(0);
const navBgTextColor = ref("bg-black text-white");
const logo = ref(whiteBlackFavicon);

const trackScroll = () => {
  trackNavBarPosition("nav-bar");
};
const goToHome = () => {
  if (route.path !== "/") {
    window.location.href = "/";
  } else {
    scrollTop();
  }
};

// animation
const before = (el) => {
  gsap.set(el, {
    opacity: 0,
  });
};
const entering = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    // duration: 1.0,
    duration: 0.8,
    delay: el.dataset.index * 0.2,
    onComplete: done,
  });
};

watchEffect(() => {
  if (route.path === "/") {
    if (currentScreenWidth.value <= 640) {
      if (
        currentOffsetHeight.value >
        screenHeight.value + heightOfNav.value / 2
      ) {
        // navbar style change on desktop view
        navBgTextColor.value = "bg-white text-black dark:bg-[#344040]";
        logo.value = blackWhiteFavicon;
      } else {
        navBgTextColor.value = "bg-black text-white";
        logo.value = whiteBlackFavicon;
      }
    } else {
      if (
        currentOffsetHeight.value >
        screenHeight.value - heightOfNav.value / 2
      ) {
        // navbar style change on desktop view
        navBgTextColor.value = "bg-white text-black dark:bg-[#344040]";
        logo.value = blackWhiteFavicon;
      } else {
        navBgTextColor.value = "bg-black text-white";
        logo.value = whiteBlackFavicon;
      }
    }
  } else {
    navBgTextColor.value = "bg-white text-black dark:bg-[#344040]";
    logo.value = blackWhiteFavicon;
  }
  if (enabled.value) {
    logo.value = whiteBlackFavicon;
  }
});
onMounted(() => {
  // track nav bar position on initial render
  trackScroll();
  // use scroll event to update the current position of nav bar
  window.addEventListener("scroll", trackScroll);
  screenHeight.value = window.innerHeight;
  heightOfNav.value = document.getElementById("nav-bar").offsetHeight;
  currentScreenWidth.value = window.innerWidth;
  loading.value = false;
});
</script>
<style lang="scss" scoped>
.underAnimation {
  position: relative;
}
.underAnimation::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #22d3ee; /* #3cefff */
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}
.underAnimation:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
}
.fadeIn-enter-active {
  animation: fadeIn 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-leave-active {
  transition: all 0.5s ease;
  width: 100%;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
