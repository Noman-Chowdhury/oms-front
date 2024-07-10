export const vClickOutside = {
    mounted(el, binding) {
        el._ClickOutsideHandler_ = (event) => {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event);
            }
        };
        document.body.addEventListener('click', el._ClickOutsideHandler_);
    },
    unmounted(el) {
        document.body.removeEventListener('click', el._ClickOutsideHandler_);
    },
};