<template>
    <div class="main-view">
        <top-bar></top-bar>
        <app-main></app-main>
    </div>
</template>

<script>
    import { TopBar, AppMain } from './components';
    export default {
        name: "Main",
        components: {
            TopBar,
            AppMain,
        },
        data() {
            return {}
        },

    }
</script>

<style scoped>

</style>