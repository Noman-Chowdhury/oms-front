<script setup>
import {computed, onMounted, provide, ref, shallowRef, watch} from "vue";
import {RouterView, useRoute} from 'vue-router';
import {OverlayScrollbars} from "overlayscrollbars";
import {currentActiveTheme} from "@/composable/manageThemeSetting.js";
import {layoutDirection, setRtl, setLtr} from "@/composable/themeDirectionSetting";
import {selectedStyleSheet, setStyleSheet} from "@/composable/primaryColorChangeSetting";
import {useMainContentCurrentBG} from "@/composable/mainContentBackgroundSetting";
import {preloader} from "@/composable/disableEnablePreloaderSetting";
import {hoverableMenu} from "@/composable/navbarSizeSetting";
import {layoutPosition} from "@/composable/navPositionSetting";

import FooterComponent from "@/components/FooterComponent.vue";
import MainSidebarComponent from "@/components/MainSidebarComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import RightSidebarComponent from "@/components/RightSidebarComponent.vue";
import ProfileRightSidebarComponent from "@/components/ProfileRightSidebarComponent.vue";

import router from '@/router/index'
import layouts from "@/layouts";

const route = useRoute();

const layout = shallowRef('div');
const isPartials = ref(false);

const isExpanded = ref(false);
const isSmall = ref(false);
const isCollapsed = ref(false);
const isExpandedBody = ref(false);
const showSidebarLinkGroup = ref(false);
const isSidebarMini = ref(false);
const isSubMenuCollapsed = ref(false);
const hasFixedSidebar = ref(false);
const isTwoColumnMenu = ref(false);

const isSidebarActive = ref(false);
const isBodyOverflowHidden = ref(false);

const isActive = ref(false);
const profileBtnId = ref('');
const dataBsToggle = ref('');

const isLightTheme = computed(() => {
  return currentActiveTheme.value === 'light-theme';
})

const profileToggleSidebar = (event) => {
  if (event.target.checked) {
    profileBtnId.value = 'profileDropdown';
    dataBsToggle.value = '';
    isActive.value = true;
    document.body.classList.add('overflow-hidden');
  } else {
    profileBtnId.value = '';
    dataBsToggle.value = 'dropdown';
    isActive.value = false;
    document.body.classList.remove('overflow-hidden');
  }
};

const profileToggleDropdown = (event) => {
  if (event.target.checked) {
    profileBtnId.value = '';
    dataBsToggle.value = 'dropdown';
    isActive.value = false;
    document.body.classList.remove('overflow-hidden');
  } else {
    profileBtnId.value = 'profileDropdown';
    dataBsToggle.value = '';
    isActive.value = true;
    document.body.classList.add('overflow-hidden');
  }
};

const handleProfileClick = (event) => {
  isActive.value = true;
  document.body.classList.add('overflow-hidden');
  event.stopPropagation();
};

const closeProfileSidebar = (event) => {
  isActive.value = false;
  document.body.classList.remove('overflow-hidden');
};

const onNavCloseClick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (window.innerWidth > 1199) {
    isExpanded.value = !isExpanded.value;
    isSmall.value = !isSmall.value;
    if (!isTwoColumnMenu.value) {
      isCollapsed.value = !isCollapsed.value;
    }
    isExpandedBody.value = !isExpandedBody.value;
    showSidebarLinkGroup.value = true;
  } else {
    isSidebarMini.value = !isSidebarMini.value;
    isCollapsed.value = false;
  }
  if (isCollapsed.value) {
    // Destroy overlay scrollbars
  } else {
    // Initialize overlay scrollbars
  }
  if (isTwoColumnMenu.value) {
    // Initialize overlay scrollbars
    isSubMenuCollapsed.value = !isSubMenuCollapsed.value;
    isCollapsed.value = true;
    hasFixedSidebar.value = true;
  }
};

const closeMainLeftSidebar = (() => {
  isSidebarMini.value = false
})

const onDocumentClick = (e) => {
  if (!e.target.matches('.main-sidebar *')) {
    // isSidebarMini.value = false;
    if (window.innerWidth < 1200) {
      if (isTwoColumnMenu.value) {
        isSubMenuCollapsed.value = true;
      }
    }
  }
};

const toggleSidebar = (e) => {
  e.stopPropagation();
  isSidebarActive.value = !isSidebarActive.value;
  isBodyOverflowHidden.value = !isBodyOverflowHidden.value;
};

const closeSidebar = () => {
  isSidebarActive.value = false;
  isBodyOverflowHidden.value = false;
};

const activeTheme = (() => {
  let element = document.body
  if(currentActiveTheme.value === 'light-theme') {
    element.classList.remove('dark-theme')
    element.classList.add('light-theme')
  } else if (currentActiveTheme.value === 'dark-theme') {
    element.classList.add('dark-theme')
    element.classList.remove('light-theme')
  } else {
    element.classList.remove('light-theme')
    element.classList.remove('dark-theme')
  }
})

onMounted(() => {
  const elements = document.querySelectorAll('.scrollable');
  elements.forEach((element) => {
    OverlayScrollbars(element, {});
  });

  document.addEventListener('click', onDocumentClick);
  isPartials.value = route.meta.isPartials
  // getCurrentTheme()
  activeTheme()

  if (layoutDirection.value === 'rtl') {
    setRtl();
  } else {
    setLtr();
  }

  if (selectedStyleSheet.value) {
      setStyleSheet(selectedStyleSheet.value);
    }
  useMainContentCurrentBG()
  // useDisableEnablePreloader()
});

watch(layoutDirection, () => {
  let element = document.documentElement
  if (layoutDirection.value === 'rtl') {
    element.setAttribute('dir', 'rtl');
  } else {
    element.removeAttribute('dir');
  }
})

watch(selectedStyleSheet, () => {
  setStyleSheet(selectedStyleSheet.value)
})

watch(currentActiveTheme, () => {
  let element = document.body
  if(currentActiveTheme.value === 'light-theme') {
    element.classList.remove('dark-theme')
    element.classList.add('light-theme')
  } else if (currentActiveTheme.value === 'dark-theme') {
    element.classList.add('dark-theme')
    element.classList.remove('light-theme')
  } else {
    element.classList.remove('light-theme')
    element.classList.remove('dark-theme')
  }
})

router.afterEach((to) => {
  isPartials.value = to.meta.isPartials
  layout.value = layouts[to.meta.layout] || 'div'
});

provide('app:layout', layout.value)
</script>

<template>
  <div class="body-padding body-p-top"
   :class="{
    expanded: isExpandedBody, 'light-theme': currentActiveTheme === 'light-theme',  'dark-theme': currentActiveTheme === 'dark-theme', 'hover-menu': hoverableMenu,
    'has-horizontal': layoutPosition === 'horizontal',
    'has-two-column-menu has-fixed-sidebar': layoutPosition === 'twoColumn',
  }"
  >
    <!-- preloader start -->
    <transition name="fade" mode="out-in">
    <div class="preloader" :class="{'d-none ': !preloader}">
      <div class="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    </transition>
    <!-- preloader end -->
      <!-- header start -->
      <HeaderComponent v-show="isPartials"
          :onNavCloseClick="onNavCloseClick"
          :isExpanded="isExpanded"
          :toggleSidebar="toggleSidebar"
          :profileToggleSidebar="handleProfileClick"
      />
      <!-- header end -->

      <!-- profile right sidebar start -->
      <ProfileRightSidebarComponent v-show="isPartials"
        :isActive="isActive"
        :profileToggleDropdown="profileToggleDropdown"
        :closeProfileSidebar="closeProfileSidebar"
      />
      <!-- profile right sidebar end -->

      <div class="right-sidebar-btn d-lg-block d-none">
        <button class="header-btn theme-settings-btn" @click="toggleSidebar"><i class="fa-light fa-gear"></i></button>
      </div>

      <!-- right sidebar start -->
      <RightSidebarComponent v-show="isPartials"
        :isSidebarActive="isSidebarActive"
        :closeSidebar="closeSidebar"
        :isLightTheme="isLightTheme"
      />
      <!-- right sidebar end -->

      <!-- main sidebar start -->
      <MainSidebarComponent v-show="isPartials"
          :isCollapsed="isCollapsed"
          :isTwoColumnMenu="isTwoColumnMenu"
          :isSidebarMini="isSidebarMini"
          :isSubMenuCollapsed="isSubMenuCollapsed"
          :closeMainLeftSidebar="closeMainLeftSidebar"
      />
      <!-- main sidebar end -->
    
    <!-- main content start -->
    <component :is="layout">
      <RouterView/>
    </component>
    <FooterComponent v-if="isPartials"/>

  </div>
</template>

<style scoped>

</style>
