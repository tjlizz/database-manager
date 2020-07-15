<template>
    <div class="database-warpper">
        <el-tree :data="connections" :expand-on-click-node="false"
                 :props="props" isLeaf="true">


            <span class="custom-tree-node" slot-scope="{ node ,data}">

               <icon-font :name="data.connection.type"></icon-font>
                <span>    {{ node.label }}</span>

      </span>
        </el-tree>
    </div>
</template>

<script>


    import IconFont from "../components/IconFont";

    export default {
        name: "DataBasePanel",
        components: {IconFont},
        props: ['connections'],
        data() {
            return {
                props: {
                    label: 'name'

                }
            }
        }, methods: {

            append(data) {
                console.log(data);
            },
            renderContent(h, {node}) {
                console.log(node);
                return (`  <span class="custom-tree-node">
                    <span>111</span>
                    <span>

                </span>
                </span>`);
            }
        }
    }
</script>

<style scoped>
    .database-warpper {
        box-sizing: border-box;
        height: 100vh;

    }
</style>
