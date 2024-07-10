<script setup>
const props = defineProps(['horizontalMenuEnabled', 'sub_menu', 'menuIndexs', 'currentRoute', 'openedMenu', 'toggleMenu', 'isCollapsed', 'closeAllDropdownMenu'])
import DropdownMenuComponent from "@/components/menu/DropdownMenuComponent.vue";
import {vClickOutside} from "@/composable/outsideClicker";
import {layoutPosition} from "@/composable/navPositionSetting";

const multilabelMenu = (() => {
  const sidebarDropdownMenus = document.querySelectorAll('.subdropdown.collapse.show');
  sidebarDropdownMenus.forEach(menu => {
    if (layoutPosition.value !== 'horizontal' || props.isCollapsed) {
      menu.classList.remove('show');
      props.closeAllDropdownMenu()
    }
  });
})
</script>

<template>

  <ul v-click-outside="multilabelMenu" class="sidebar-dropdown-menu subdropdown collapse" :class="[horizontalMenuEnabled ? 'dropdown-menu' : '']" :id="[horizontalMenuEnabled ? `subDropDownId-${menuIndexs}` : `subCollapseMenu-${menuIndexs}`]" :aria-labelledby="[horizontalMenuEnabled ? `parentSubDropdownMenu-${menuIndexs}` : '']">
    <li v-for="(child, cIndex) in sub_menu.sub_menus" class="sidebar-dropdown-item">
      <template v-if="child.sub_menus">
        <template v-if="horizontalMenuEnabled">
          <a role="button" class="sidebar-link has-sub" :id="'parentSubDropdownMenu'+index" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
            <span v-if="child.icon" class="nav-icon"><i :class="child.icon"></i></span> <span :class="{'sidebar-txt': !isCollapsed}">{{ $t(child.name) }}</span>
          </a>
        </template>
        <template v-else>
          <a role="button" class="sidebar-link has-sub" data-bs-toggle="collapse" :href="`#subCollapseMenu-${menuIndexs}-${cIndex}`" aria-expanded="false" :aria-controls="`subCollapseMenu-${menuIndexs}-${cIndex}`" @click="toggleMenu(child.name)">
            <span v-if="child.icon" class="nav-icon"><i :class="child.icon"></i></span> <span :class="{'sidebar-txt': !isCollapsed}">{{ child.name }}</span>
          </a>
        </template>
      </template>
      <template v-else>
        <router-link :to="[sub_menu.link_name ? {name: sub_menu.link_name} : '#']" class="sidebar-link" :class="{active : currentRoute === 'hrm_add_employee'}">
          {{ child.name }}
        </router-link>
      </template>
      <ul class="sidebar-dropdown-menu collapse" :class="[horizontalMenuEnabled ? 'dropdown-menu' : '']" :id="[horizontalMenuEnabled ? `subDropDownId-${menuIndexs}-${cIndex}` : `subCollapseMenu-${menuIndexs}-${cIndex}`]" :aria-labelledby="[horizontalMenuEnabled ? `parentSubDropdownMenu-${menuIndexs}-${cIndex}`  : '']">
        <DropdownMenuComponent :subMenu="child.sub_menus" :currentRoute="currentRoute" :toggleMenu="toggleMenu"/>
      </ul>
    </li>
  </ul>
</template>

<style scoped>

</style>