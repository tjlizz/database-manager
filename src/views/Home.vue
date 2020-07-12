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
                <el-dialog :visible.sync="dialogisible">
                    <connection @click="addItem"></connection>

                </el-dialog>
            </el-main>
        </el-container>


    </div>
</template>

<script>
    import Connection from "../pages/Connection";
    import {getDataBase} from "../js/main"

    export default {
        name: 'Home',
        data() {
            return {
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
                console.log(node.level);
                console.log(data.name, '222');
                console.log(data.sourceId, '222');


                if (data.sourceId != null) {
                    const dataBase = await getDataBase(data.type, data.sourceId);
                    let nodeList = []
                    for (let i = 0; i < dataBase.length; i++) {
                        nodeList.push({name: dataBase[i]})
                    }
                  node.childNodes = [];
                    node.doCreateChildren(nodeList)
                    // this.loadNode(node,)
                    node.expand()
                }
            }
            ,

            addItem(item) {
                this.connections.push(item)
            }
        },
        components: {
            Connection
        }
    }
</script>
