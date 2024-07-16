import { defineStore } from 'pinia';
import {ref} from "vue";

export const useUserInfoStore = defineStore('userInfo', ()=>{
    const user = ref(null);
    const token = ref(null);
    const userType = ref(null);

    const setUser = (userData, userToken, type) => {
        user.value = userData;
        token.value = userToken;
        userType.value = type;

        if (type === 'admin') {
            localStorage.setItem('_a_u', JSON.stringify(userData));
            localStorage.setItem('_a_t', userToken);
        } else {
            localStorage.setItem('_u', JSON.stringify(userData));
            localStorage.setItem('_u_t', userToken);
        }
        localStorage.setItem('_u_type', type);
    };

    const clearUser = () => {
        user.value = null;
        token.value = null;
        userType.value = null;
        localStorage.removeItem('_u');
        localStorage.removeItem('_u_t');
        localStorage.removeItem('_a_u');
        localStorage.removeItem('_a_t');
        localStorage.removeItem('_u_type');
    };

    const initializeStore = () => {
        const storedUserType = localStorage.getItem('_u_type');
        if (storedUserType) {
            userType.value = storedUserType;
            if (storedUserType === 'admin') {
                user.value = JSON.parse(localStorage.getItem('_a_u'));
                token.value = localStorage.getItem('_a_t');
            } else {
                user.value = JSON.parse(localStorage.getItem('_u'));
                token.value = localStorage.getItem('_u_t');
            }
        }
    };

    return {
        user,
        token,
        userType,
        setUser,
        clearUser,
        initializeStore,
    };
});
