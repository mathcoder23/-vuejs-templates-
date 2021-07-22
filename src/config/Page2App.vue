<template>
    <div>
        Hello My Templates.This Default Page2
        <el-button>button</el-button>
    </div>
</template>

<script>
    export default {
        name: "Page2App",
        mounted() {
            this.$api.GoodsApi.getList()
        }
    }
</script>

<style scoped>

</style>
