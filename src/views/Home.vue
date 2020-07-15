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
                <el-aside width="500px">
                    <data-base-panel :connections="connections"></data-base-panel>
                </el-aside>
                <el-main>
                    <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
                        <el-tab-pane
                                :key="item.name"
                                v-for="(item) in editableTabs"
                                :label="item.title"
                                :name="item.name"
                        >
                            {{item.content}}
                        </el-tab-pane>
                    </el-tabs>

                </el-main>
            </el-container>

        </el-container>


    </div>
</template>

<script>
    import Connection from "../pages/Connection";
    import DataBasePanel from "../pages/DataBasePanel";
    import main from "../js/main";

    export default {
        name: 'Home',
        data() {
            return {
                editableTabsValue: '2',
                editableTabs: [{
                    title: 'Tab 1',
                    name: '1',
                    content: 'Tab 1 content'
                }, {
                    title: 'Tab 2',
                    name: '2',
                    content: 'Tab 2 content'
                }],
                tabIndex: 2,
                connections: [],
                dialogisible: false

            }
        },
        methods: {
            async addItem(item) {
                console.log(item);
                item['leaf'] = true
                const tables = await main.getTables(item.sourceId, item.connection.dataBaseName)
                let nodeList = []
                for (let i = 0; i < tables.length; i++) {
                    nodeList.push({name: tables[i].tableName, connection: {type: 'table'}})
                }

                item.children = nodeList
                this.connections.push(item)
                this.dialogisible = false
            }
        },
        components: {
            DataBasePanel,
            Connection,

        }
    }
</script>
