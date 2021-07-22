<template>
    <div class="hello">

    </div>
</template>

<script>
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];
    export default {
        name: 'HelloWorld',
        data() {
            return {data}
        },
        mounted() {
            this.$api.GoodsApi.getList()
        },
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
