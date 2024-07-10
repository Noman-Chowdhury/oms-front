import { ref, computed, onMounted, onUnmounted } from 'vue';

export const sidebarBgBtns = ref(null);
export const mainSidebarBg = ref(null);
export const noBackground = ref(null);

export const setNavBackground = (btn) => {
    const navBackground = btn.getAttribute('data-img');
    btn.style.backgroundImage = `url(${navBackground})`;
};

export const clickHandler = (image) => {
    mainSidebarBg.value = image;
    localStorage.setItem('navbackgroundImage', image);
};

export const removeBackground = () => {
    mainSidebarBg.value = '';
    localStorage.removeItem('navbackgroundImage');
};

export const useSidebarCurrentBG = (() => {
    const navbackgroundImage = localStorage.getItem('navbackgroundImage');
    if (navbackgroundImage) {
        mainSidebarBg.value = navbackgroundImage;
    }
});