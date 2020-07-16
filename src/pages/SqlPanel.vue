<template>
    <el-table :data="tableData" max-height="500px" stripe border>
        <el-table-column v-for="item in columdItem" :key="item.prop"
                         :prop=item.columnName
                         align="center"
                         :label=item.columnName
                          >
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
        }, methods: {

            async dataload() {
                const data = await main.getColumns(this.sourceId, this.tableName)
                this.columdItem = data
                const tableData = await main.getTableList(this.sourceId, this.tableName);
                // eslint-disable-next-line no-debugger
                debugger
                this.tableData = tableData;

            }
        },

        mounted() {
            this.dataload()


        }, watch: {
            tableName: function () {
                this.dataload()
            }
        }
    }
</script>

<style scoped>

</style>
