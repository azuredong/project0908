<template>
    <div>
        <p><span>{{movieDetail.title}}</span>的详情页面</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            };
        },
        components: {},
        mounted() {
        },
        methods: {},
        computed: {
            movieDetail () {
                return this.$store.state.movieDetail;
            }
        },
        watch: {}
    };
</script>

<style lang="scss" scope>
</style>