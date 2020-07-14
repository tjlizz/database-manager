<template>
    <div class="home">

        <el-container>
            <el-aside width="500px">
                <data-base-panel :connections="connections"></data-base-panel>
            </el-aside>
            <el-main>
                <el-button @click="dialogisible=true">新增</el-button>
                <sql-exec></sql-exec>
                <sql-panel :table-name="tableName" :source-id="sourceId"></sql-panel>
                <el-dialog :visible.sync="dialogisible">
                    <connection @click="addItem"></connection>

                </el-dialog>
            </el-main>
        </el-container>


    </div>
</template>

<script>
    import Connection from "../pages/Connection";
    import SqlPanel from "../pages/SqlPanel";
    import SqlExec from "../pages/SqlExec";
    import DataBasePanel from "../pages/DataBasePanel";

    export default {
        name: 'Home',
        data() {
            return {
                selectCon: '',
                sourceId: 'da33b70a-1358-4254-97a1-c1c5b5c7474a',
                tableName: 'test',
                connections: [],
                items: ['1', 2],
                dialogisible: false

            }
        },
        methods: {
            addItem(item) {
                this.connections.push(item)
                this.dialogisible = false
            }
        },
        components: {
            DataBasePanel,
            SqlExec,
            Connection,
            SqlPanel
        }
    }
</script>
