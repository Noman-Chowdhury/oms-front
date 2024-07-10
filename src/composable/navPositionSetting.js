import { ref } from 'vue';
import { handleNavbarSize, hoverableMenu, currentNavbarSize } from './navbarSizeSetting';

export const layoutPosition = ref(localStorage.getItem('layoutPosition') || 'vertical');

export const handleNavPositionClick = (value) => {
    localStorage.setItem('layoutPosition', value);
    layoutPosition.value = localStorage.getItem('layoutPosition');
    if(layoutPosition.value === 'horizontal' || layoutPosition.value === 'twoColumn'){
        hoverableMenu.value = false
        currentNavbarSize.value = 'default'
        localStorage.removeItem("sidebarHover");
        localStorage.removeItem("sidebarSmall");
    }
};