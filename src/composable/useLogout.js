import { ref } from 'vue';
import {adminAxiosInstance, userAxiosInstance} from "@/plugins/axiosInstance";
import {useRoute, useRouter} from "vue-router";
import {useToast} from "vue-toast-notification";
import {useUserInfoStore} from "@/stores/userInfoStore";


export function useLogout() {
    const isLoading = ref(false);
    const route = useRoute();
    const router = useRouter();
    const $toast = useToast();
    const userStore = useUserInfoStore();
    const logout = async () => {
        event.preventDefault();
        isLoading.value = true;
        if (route.meta.isAdmin || userStore.userType === 'admin') {
            adminAxiosInstance.post('/logout').then((response) => {
                localStorage.removeItem("_a_t");
                localStorage.removeItem("_a_u");
                router.push('/admin/login');
                $toast.success(response.data.message);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                isLoading.value = false;
            });
        } else {
            userAxiosInstance.post('/logout').then((response) => {
                userStore.clearUser()
                router.push('/login');
                $toast.success(response.data.message);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                isLoading.value = false;
            });
        }
    };

    return {
        logout,
        isLoading
    };
}
