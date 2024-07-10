import {ref} from 'vue';
const defaultTheme =  import.meta.env.VITE_DEFAULT_THEME;

export const currentActiveTheme = ref(localStorage.getItem('currentActiveTheme') || defaultTheme);

export const changeCurrentTheme = (theme) => {
    localStorage.setItem('currentActiveTheme', theme);
    currentActiveTheme.value = localStorage.getItem('currentActiveTheme');
}

export const toggleTheme = () => {
    if (currentActiveTheme.value === 'light-theme') {
        localStorage.setItem('currentActiveTheme', 'blue-theme');
    } else {
        localStorage.setItem('currentActiveTheme', 'light-theme');
    }

    currentActiveTheme.value = localStorage.getItem('currentActiveTheme');
}
