<script setup>
import {sidebarDropdownManage} from "@/composable/manageSidebarMenu";

const props = defineProps(['isCollapsed','isTwoColumnMenu','isSidebarMini','isSubMenuCollapsed', 'closeMainLeftSidebar'])
import {computed, onMounted, ref, watch, watchEffect} from "vue";
import {useRoute} from "vue-router";
import SidebarMenuComponent from "@/components/menu/SidebarMenuComponent.vue";
import {vClickOutside} from "@/composable/outsideClicker";
import {mainSidebarBg, useSidebarCurrentBG} from "@/composable/mainSidebarBackgroundSetting"
import {sidebarMenus} from "@/composable/sidebarMenu"
import {currentNavbarSize, hoverableMenu, hoverableSidebar, hoverableOutSidebar} from "@/composable/navbarSizeSetting"

import {layoutPosition} from "@/composable/navPositionSetting";
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const route = useRoute();
const currentRoute = ref('');
const isSubmenus = ref(false);

const openedMenu = ref(null);

const findMenuByName = ((name) => {
  if (layoutPosition.value === 'twoColumn') {
    const sidebarDropdownMenus = document.querySelectorAll('.sidebar-dropdown-menu.collapse.show');
    sidebarDropdownMenus.forEach(menu => {
      menu.classList.remove('show');
    });
  } else {
    openedMenu.value = null
    for (let i = 0; i < sidebarMenus.value.length; i++) {
      let menu = sidebarMenus.value[i];
      for (let j = 0; j < menu.menus.length; j++) {
        let subMenu = menu.menus[j];
        if (subMenu.name === name && subMenu.sub_menus) {
          openedMenu.value = subMenu.sub_menus
          return subMenu.sub_menus;
        }
      }
    }
    return null;
  }

})

const checkSubMenus = ((array) => {
  for (let item of array) {
      if (item.sub_menus) {
          return true;
      } else if (Array.isArray(item.sub_menus) && checkSubMenus(item.sub_menus)) {
          return true;
      }
    }
    return false;
})

const closeToggleMenu = (() => {
  if(openedMenu.value && openedMenu.value.length > 0) {
    isSubmenus.value = checkSubMenus(openedMenu.value)
  }
  const sidebarDropdownMenus = document.querySelectorAll('.sidebar-dropdown-menu.collapse.show');
  if (layoutPosition.value !== 'horizontal' || props.isCollapsed) {
    sidebarDropdownMenus.forEach(menu => {
      if(!isSubmenus.value && layoutPosition.value !== 'twoColumn') {
        menu.classList.remove('show');
      }
    });
  }
})

const closeAllDropdownMenu = (() => {
  sidebarDropdownManage()
})

const horizontalMenuEnabled = computed(() => {
  return layoutPosition.value === 'horizontal';
})

watchEffect(() => {
  currentRoute.value = route.name;
  if (props.isCollapsed){
    sidebarDropdownManage()
  }
});

onMounted(() => {
  useSidebarCurrentBG();
})
</script>

<template>
  <div class="main-sidebar"
   :class="{
      'collapsed sub-menu-collapsed': isCollapsed, 'two-column-menu collapsed': isTwoColumnMenu, 'sidebar-mini': isSidebarMini,
      'sub-menu-collapsed': isSubMenuCollapsed, 'hoverable': currentNavbarSize === 'expand',
      'sidebar-hover hoverable': hoverableMenu,
      'open-sub horizontal-menu': horizontalMenuEnabled,
      'two-column-menu collapsed': layoutPosition === 'twoColumn',
      'flush-menu': layoutPosition === 'flushMenu'
    }"
   :style="`background-image: url(${mainSidebarBg})`"
   @mouseenter="hoverableSidebar"
   @mouseleave="hoverableOutSidebar"
  >
    <div v-click-outside="closeMainLeftSidebar" class="main-menu">
      <div class="scrollable sidebar-menu" :id="horizontalMenuEnabled ? 'accordionExample' : 'testAccordionExample'">
          <li v-for="(sidebar, index) in sidebarMenus" class="sidebar-item" :class="[horizontalMenuEnabled ? 'dropdown': '']">
            <template v-if="horizontalMenuEnabled">
              <a role="button" class="sidebar-link-group-title has-sub" :id="'parentDropdownMenu'+index" :data-bs-toggle="[horizontalMenuEnabled ? 'dropdown' : '']" data-bs-auto-close="outside" aria-expanded="false">
                {{ $t(sidebar.menu_name) }}
              </a>
            </template>
            <template v-else>
              <a role="button" class="sidebar-link-group-title has-sub" data-bs-toggle="collapse" :href="`#collapseExample-${index}`" aria-expanded="false" :aria-controls="'collapseExample-'+index">
                {{ $t(sidebar.menu_name) }}
              </a>
            </template>

            <template v-if="sidebar.menus">
              <ul class="sidebar-link-group" :class="[horizontalMenuEnabled ? 'dropdown-menu' : 'show']" :aria-labelledby="[horizontalMenuEnabled ? 'parentDropdownMenu'+index  : '']" :id="[horizontalMenuEnabled ? 'AppDropDownId'+index : `collapseExample-${index}`]" data-bs-parent="#testAccordionExample">
                <li v-for="(menu, mIndex) in sidebar.menus" class="sidebar-dropdown-item">
                  <template v-if="menu.link_name">
                    <router-link :to="{ name: `${menu.link_name}` }" class="sidebar-link" :class="{active : currentRoute === menu.link_name }">
                      <span class="nav-icon"><i :class="menu.icon"></i></span> <span class="sidebar-txt">{{ $t(menu.name) }}</span>
                    </router-link>
                  </template>
                  <template v-if="menu.sub_menus">
                    <template v-if="horizontalMenuEnabled">
                    <a role="button" class="sidebar-link has-sub" :id="'parentSubDropdownMenu'+index" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                      <span v-if="menu.icon" class="nav-icon"><i :class="menu.icon"></i></span> <span class="sidebar-txt">{{ $t(menu.name) }}</span>
                    </a>
                    </template>
                    <template v-else>
                      <a role="button" class="sidebar-link has-sub" data-bs-toggle="collapse" :href="`#subCollapseMenu-${mIndex}-${index}`" aria-expanded="false" :aria-controls="`subCollapseMenu-${mIndex}-${index}`" @click="findMenuByName(menu.name)">
                        <span v-if="menu.icon" class="nav-icon"><i :class="menu.icon"></i></span> <span class="sidebar-txt">{{ $t(menu.name) }}</span>
                      </a>
                    </template>
                  </template>
                  <ul v-click-outside="closeToggleMenu" class="sidebar-dropdown-menu collapse" :class="[horizontalMenuEnabled ? 'dropdown-menu' : '', openedMenu === menu.name ? 'd-block' : '', (layoutPosition === 'twoColumn' && index === 1) ? 'show' : '']" :id="[horizontalMenuEnabled ? `subDropDownId-${mIndex}-${index}` : `subCollapseMenu-${mIndex}-${index}`]" :aria-labelledby="[horizontalMenuEnabled ? `parentSubDropdownMenu-${mIndex}-${index}`  : '']">
                    <li v-for="(sub_menu, sIndex) in menu.sub_menus" class="sidebar-dropdown-item">
                      <template v-if="sub_menu.link_name">
                        <router-link :to="{ name: `${sub_menu.link_name}` }" class="sidebar-link" :class="{active : currentRoute === sub_menu.link_name }">
                          <span v-if="sub_menu.icon" class="nav-icon"><i :class="sub_menu.icon"></i></span> <span :class="{'sidebar-txt': (currentNavbarSize !== 'small' && layoutPosition !== 'twoColumn')}">{{ sub_menu.name }}</span>
                        </router-link>
                      </template>
                      <template v-else>
                        <router-link to="#" class="sidebar-link" :class="{active : currentRoute === sub_menu.link_name }">
                          <span v-if="sub_menu.icon" class="nav-icon"><i v-if="sub_menu.icon" :class="sub_menu.icon"></i></span> <span :class="{'sidebar-txt': currentNavbarSize !== 'small'}">{{ sub_menu.name }}</span>
                        </router-link>
                      </template>
                      <template v-if="sub_menu.sub_menus">
                        <template v-if="horizontalMenuEnabled">
                          <a role="button" class="sidebar-link has-sub" :id="'parentSubDropdownMenu'+index" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" @click="findMenuByName(sub_menu.name)">
                            <span v-if="sub_menu.icon" class="nav-icon"><i :class="sub_menu.icon"></i></span> <span class="sidebar-txt">{{ $t(sub_menu.name) }}</span>
                          </a>
                        </template>
                        <template v-else>
                        <a role="button" class="sidebar-link has-sub" data-bs-toggle="collapse" :href="`#subCollapseMenu-${mIndex}-${index}-${sIndex}`" aria-expanded="false" :aria-controls="`subCollapseMenu-${mIndex}-${index}-${sIndex}`" @click="findMenuByName(sub_menu.name)">
                          <span v-if="sub_menu.icon" class="nav-icon"><i :class="sub_menu.icon"></i></span>
                          <span :class="{'sidebar-txt': currentNavbarSize !== 'small'}">{{ sub_menu.name }}</span>
                        </a>
                        </template>
                      </template>
                      <SidebarMenuComponent
                          v-if="sub_menu.sub_menus && sub_menu.sub_menus.length > 0"
                          :horizontalMenuEnabled="horizontalMenuEnabled"
                          :sub_menu="sub_menu"
                          :menuIndexs="`${mIndex}-${index}-${sIndex}`"
                          :currentRoute="currentRoute"
                          :toggleMenu="findMenuByName"
                          :openedMenu="openedMenu"
                          :isCollapsed="isCollapsed"
                          :closeAllDropdownMenu="closeAllDropdownMenu"
                      />
                    </li>
                  </ul>
                </li>
              </ul>
            </template>
          </li>
          <li class="help-center">
            <h3>Help Center</h3>
            <p>We're an award-winning, forward thinking</p>
            <a href="#" class="btn btn-sm btn-light">Go to Help Center</a>
          </li>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>