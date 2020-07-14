<template>
    <el-container>
        <el-aside width="200px">
            <el-tree @node-click="nodeClick" :data="connections" :expand-on-click-node="false"
                     :props="props"

                     lazy
            ></el-tree>
        </el-aside>
        <el-main>Main</el-main>
    </el-container>
</template>

<script>
    import main from "../js/main";

    export default {
        name: "DataBasePanel",
        props: ['connections'],
        data() {
            return {
                props: {
                    label: 'name',
                    children: 'zones',
                    isLeaf: 'leaf'
                }
            }
        }, methods: {
            async nodeClick(data, node) {
                if (node.childNodes.length != 0) return

                if (data.sourceId != null && node.level === 1) {
                    const dataBase = await main.getDataBase(data.sourceId);
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
                    if (node.parent.data.sourceId) {
                        const tables = await main.getTables(node.parent.data.sourceId, node.label)
                        let nodeList = []
                        for (let i = 0; i < tables.length; i++) {
                            nodeList.push({name: tables[i].tableName})
                        }
                        node.childNodes = [];
                        node.doCreateChildren(nodeList)
                    }

                }
            }
            ,
            getTables(dbId) {

                return this.items.filter(t => t.id === dbId)
            },
            changeDataBase(item) {
                console.log(item);
            },
            async getDataBase(data, node) {
                if (data.sourceId != null && node.level === 1) {
                    const dataBase = await main.getDataBase(data.sourceId);
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
        }
    }
</script>

<style scoped>

</style>
