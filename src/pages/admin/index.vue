<template>
    <h1>Admin Page</h1>
    <BaseButton label="Logout" @click="logout"></BaseButton>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia';
import { userAuthStore } from '../../stores/auth/auth';

const authStore = userAuthStore();
const {user: authUser} = storeToRefs(authStore);
const router = useRouter()
async function logout() {
    await authStore.logout();
    router.push('/admin/login');

}
</script>