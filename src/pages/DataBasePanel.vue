<template>
    <el-container>
        <el-aside width="200px">
            <el-collapse v-model="activeName" accordion @change="changeDataBase">
                <el-collapse-item title="一致性 Consistency" name="1">
                    <div :key="item.id" v-for="item in this.getTables(1)">{{item.text}}</div>
                </el-collapse-item>

            </el-collapse>
        </el-aside>
        <el-main>Main</el-main>
    </el-container>
</template>

<script>
    import main from "../js/main";
    export default {
        name: "DataBasePanel",
        data() {
            return {
                activeName: '1',
                items: [{id: 1, text: 'a'}, {id: 2, text: 'b'}]
            }
        }, methods: {
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
