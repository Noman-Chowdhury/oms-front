import { ref, computed, onMounted, onUnmounted } from 'vue';

export const mainContentBg = ref(null);
export const noBackground2 = ref(null);

export const clickHandler = (bodyBackground) => {
    document.body.style.backgroundImage = `url(${bodyBackground})`;
    localStorage.setItem('mainBackgroundImage', bodyBackground);
};

export const removeBackground = () => {
    mainContentBg.value = '';
    document.body.style.backgroundImage = 'none';
    localStorage.removeItem('mainBackgroundImage');
};

export const useMainContentCurrentBG = (() => {
    const mainBackgroundImage = localStorage.getItem('mainBackgroundImage');
    if (mainBackgroundImage) {
        document.body.style.backgroundImage = `url(${mainBackgroundImage})`;
    }
});