import { defineStore } from 'pinia';
import {computed, ref} from "vue";

export const useUserInfoStore = defineStore('userInfo', ()=>{
    const user = ref(null);
    const token = ref(null);
    const userType = ref(null);
    const permissions = ref([]);

    const setUser = (userData, userToken, type, permissionsData = []) => {
        user.value = userData;
        token.value = userToken;
        userType.value = type;
        permissions.value = permissionsData

        if (type === 'admin') {
            localStorage.setItem('_a_u', JSON.stringify(userData));
            localStorage.setItem('_a_t', userToken);
        } else {
            localStorage.setItem('_u', JSON.stringify(userData));
            localStorage.setItem('_u_t', userToken);
        }
        localStorage.setItem('_u_type', type);
        localStorage.setItem('_u_permissions', JSON.stringify(permissionsData));
    };

    const clearUser = () => {
        user.value = null;
        token.value = null;
        userType.value = null;
        permissions.value = [];
        localStorage.removeItem('_u');
        localStorage.removeItem('_u_t');
        localStorage.removeItem('_a_u');
        localStorage.removeItem('_a_t');
        localStorage.removeItem('_u_type');
        localStorage.removeItem('_u_permissions');

    };

    const initializeStore = () => {
        const storedUserType = localStorage.getItem('_u_type');
        const storedPermissions = localStorage.getItem('_u_permissions');
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
        if (storedPermissions){
            permissions.value = storedPermissions
        }
    };

    const hasPermission = computed(() => (requiredPermissions) => {
        if (!Array.isArray(requiredPermissions)) {
            requiredPermissions = [requiredPermissions]; // Ensure it's an array
        }

        // Check if any of the required permissions exist in the user's permissions array
        return requiredPermissions.some(permission => permissions.value.includes(permission));
    });

    return {
        user,
        token,
        userType,
        permissions,
        setUser,
        clearUser,
        initializeStore,
        hasPermission
    };
});
