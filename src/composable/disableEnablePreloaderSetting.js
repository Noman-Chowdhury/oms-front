import { ref, computed, onMounted, onUnmounted } from 'vue';

export const disableLoader = ref(null);
export const enableLoader = ref(null);
export const preloader = ref(null);

export const disableLoaderClickHandler = () => {
    preloader.value = false;
};

export const enableLoaderClickHandler = () => {
    preloader.value = true;
    setTimeout(() => {
        preloader.value = false;
    }, 3000)
    // preloader.value.style.animation = 'fadein 0.1s, fadeout 2s';
};

export const useDisableEnablePreloader = (() => {
    disableLoader.value.addEventListener('click', disableLoaderClickHandler);
    enableLoader.value.addEventListener('click', enableLoaderClickHandler);
});