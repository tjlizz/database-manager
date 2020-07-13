<template>
    <el-table :data="tableData">
        <el-table-column v-for="item in columdItem" :key="item.prop"
                         :prop=item.columnName
                         :label=item.columnName
                         width="180">
        </el-table-column>

    </el-table>
</template>

<script>
    import main from "../js/main";

    export default {
        name: "SqlPanel",
        props: ["sourceId", "tableName"],
        data() {
            return {
                columdItem: [],
                tableData: []
            }
        }, async mounted() {
            const data = await main.getColumns(this.sourceId, this.tableName)
            this.columdItem = data
        }
    }
</script>

<style scoped>

</style>
