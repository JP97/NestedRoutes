<template>
    <div id="app">
    
        <router-link to="/first">FirstMenu </router-link>
        <router-link to="/second"> SecondMenu</router-link>

        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app'
    };
</script>

<style>

    a{
        text-decoration:none;
    }
</style>

