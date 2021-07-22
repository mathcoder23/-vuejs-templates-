<template>
    <div>
        Hello My Templates.This Default Page
        <el-button>button</el-button>
    </div>
</template>

<script>
    export default {
        name: "DefaultApp",
        mounted() {
            this.$api.GoodsApi.getList()
        }
    }
</script>

<style scoped>

</style>
