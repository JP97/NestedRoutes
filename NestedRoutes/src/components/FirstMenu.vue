<template>
    <div class="FirstMenu">
        <h1>FirstMenu</h1>
        <br />
        <p>Welcome to your new single-page application, built with <a href="https://vuejs.org" target="_blank">Vue.js</a>.</p>
        <br />
        <br />
        <br />

            <router-link to="details"> Detail </router-link>
            <router-link to="buy"> Buy </router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'FirstMenu',
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

