<template>
    <div id="app">
        <h1>这是初始页</h1>
        <router-link to="/index">留言板页</router-link>
        <router-link to="/user">用户页</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',

}
</script>

<style>

</style>
