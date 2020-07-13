<template>
    <div class="home">

        <el-container>
            <el-aside width="200px">
                <el-tree @node-click="nodeClick" :data="connections" :expand-on-click-node="false"
                         :props="props"

                         lazy
                ></el-tree>
            </el-aside>
            <el-main>
                <el-button @click="dialogisible=true">新增</el-button>
                <span v-for="rs in items" :key="rs">{{rs}}</span>
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
    import main from "../js/main"
    import SqlPanel from "../pages/SqlPanel";

    export default {
        name: 'Home',
        data() {
            return {
                sourceId: '93238e2e-dfe4-4bea-9b7b-7a35d42db858',
                tableName: 'test',
                props: {
                    label: 'name',
                    children: 'zones',
                    isLeaf: 'leaf'
                },
                connections: [],
                items: ['1', 2],
                dialogisible: false

            }
        },
        methods: {

            async nodeClick(data, node) {
                if (node.childNodes.length != 0) return

                if (data.sourceId != null && node.level === 1) {
                    const dataBase = await main.getDataBase(data.type, data.sourceId);
                    let nodeList = []
                    for (let i = 0; i < dataBase.length; i++) {
                        nodeList.push({name: dataBase[i]})
                    }
                    node.childNodes = [];
                    node.doCreateChildren(nodeList)
                    // this.loadNode(node,)
                    node.expand()
                } else (node.level === 2)
                {


                    let connectionObj = node.parent.data.connection;
                    console.log(connectionObj);
                    connectionObj.dataBaseName = node.label
                    console.log(connectionObj);
                    // let connectionData = await main.createConnection(connectionObj)
                    // node.data["a"] = connectionData;


                }
            }
            ,

            addItem(item) {
                this.connections.push(item)
                this.dialogisible = false
            }
        },
        components: {
            Connection,
            SqlPanel
        }
    }
</script>
