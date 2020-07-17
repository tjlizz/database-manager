<template>

    <div>
        <sql-exec @search="search"></sql-exec>
        <el-table :data="tableData" max-height="500px" stripe border>
            <el-table-column
                    align="center"
                    type="index"
                    width="50">
            </el-table-column>
            <el-table-column v-for="item in columdItem" :key="item.prop"
                             :prop=item.columnName
                             align="center"
                             :label=item.columnName
            >
            </el-table-column>

        </el-table>
        <my-pagination></my-pagination>
    </div>
</template>

<script>
    import main from "../js/main";
    import SqlExec from "./SqlExec";
    import MyPagination from "../components/MyPagination";

    export default {
        name: "SqlPanel",
        components: {MyPagination, SqlExec},
        props: ["sourceId", "tableName"],
        data() {
            return {
                columdItem: [],
                tableData: [],
                count: 100,
                sqlText: ''
            }
        }, methods: {

            async dataload() {
                const data = await main.getColumns(this.sourceId, this.tableName)
                this.columdItem = data
                const tableData = await main.getTableList({
                    sqlText: this.sqlText,
                    sourceId: this.sourceId,
                    count: this.count,
                    tableName: this.tableName
                });
                // eslint-disable-next-line no-debugger
                debugger
                this.tableData = tableData;

            },
            search({count, sqlText}) {
                // eslint-disable-next-line no-debugger
                debugger
                this.count = count;
                this.sqlText = sqlText;
            }
        },

        mounted() {
            this.dataload()


        }, watch: {
            tableName: function () {
                this.dataload()
            },
            count:function () {
                this.dataload()

            },
            sqlText:function () {
                this.dataload()

            }
        }
    }
</script>

<style scoped>

</style>
