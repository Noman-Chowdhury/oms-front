import { ref } from 'vue';
const defaultColor =  import.meta.env.VITE_DEFAULT_COLOR

export const colors = ref([]);
export const selectedStyleSheet = ref(localStorage.getItem('selectedStyleSheet') || defaultColor);

export const setStyleSheet = (color) => {
    selectedStyleSheet.value = color;
    localStorage.setItem('selectedStyleSheet', color);
    // You might need to adjust this part based on how you are applying the style sheet
    const colorStyleLink = document.getElementById('primaryColor');
    // Set the 'href' attribute to the new CSS file path
    colorStyleLink.href = new URL(`/src/assets/css/${color}.css`, import.meta.url);
};