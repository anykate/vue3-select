<template>
    <div class="container">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        |
        <router-link :to="{ name: 'Cars' }">Cars</router-link>
        |
        <router-link :to="{ name: 'About' }">About</router-link>
        <router-view />
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: green;
    text-decoration: none !important;
}
</style>
