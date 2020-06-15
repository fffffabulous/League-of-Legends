<template>
    <div class="">
        <div class="topbar bg-black py-2 px-3 d-flex ai-center">
            <img src="../assets/Yasuo.png" alt="" height="30">

            <div class="px-2 flex-1">
                <div class="text-white">英雄联盟</div>
                <div class="text-grey-1 fs-xxs">登峰造极境</div>
            </div>
            <button type="button" href="" class="btn bg-primary">立即下载</button>
        </div>

        <div class="bg-primary pt-3 pb-2">
            <div class="nav nav-inverse pb-1 jc-around">
                <div class="nav-item active">
                    <router-link class="nav-link" tag="div" to="/">首页</router-link>
                </div>
                <div class="nav-item">
                    <router-link class="nav-link" tag="div" to="/">攻略中心</router-link>
                </div>
                <div class="nav-item">
                    <router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
                </div>
            </div>
        </div>

        <router-view :key="$route.path"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<style lang="scss">
    .topbar {
        position: sticky;
        top: 0;
        z-index: 99;
    }
</style>