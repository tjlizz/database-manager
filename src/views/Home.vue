<template>
    <div class="home">

        <el-container>
            <el-header>
                <el-button @click="dialogisible=true">新增</el-button>
                <el-dialog :visible.sync="dialogisible">
                    <connection @click="addItem"></connection>

                </el-dialog>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <data-base-panel @click="showData" :connections="connections"></data-base-panel>
                </el-aside>
                <el-main>
                    <sql-panel  v-if="sourceId!=''"   :source-id="sourceId" :table-name="tableName"></sql-panel>

                </el-main>
            </el-container>

        </el-container>


    </div>
</template>

<script>
    import Connection from "../pages/Connection";
    import DataBasePanel from "../pages/DataBasePanel";
    import main from "../js/main";
    import SqlPanel from "../pages/SqlPanel";

    export default {
        name: 'Home',
        data() {
            return {
                sourceId: '',
                tableName: '',
                connections: [],
                dialogisible: false

            }
        },
        methods: {

            showData({sourceId, tableName}) {
                this.sourceId = sourceId;
                this.tableName = tableName;
            },
            async addItem(item) {
                console.log(item);
                item['leaf'] = true
                const tables = await main.getTables(item.sourceId, item.connection.dataBaseName)
                let nodeList = []
                for (let i = 0; i < tables.length; i++) {
                    nodeList.push({
                        name: tables[i].tableName, connection: {
                            type: 'table',
                            sourceId: item.sourceId
                        }
                    })
                }

                item.children = nodeList
                this.connections.push(item)
                this.dialogisible = false
            }
        },
        components: {
            SqlPanel,
            DataBasePanel,
            Connection,

        }
    }
</script>
