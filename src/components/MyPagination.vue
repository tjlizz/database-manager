<template>
    <div class="my-pagination">
        <i class="el-icon-arrow-left"></i>
        <span @click="currentChange(n)" v-bind:class="{active:currenPage==n}" v-for="n in count" :key="n">{{n}}</span>
        <i class="el-icon-arrow-right"></i>
    </div>
</template>

<script>
    export default {
        name: 'MyPagination',
        data() {
            return {
                count: 10,
                currenPage: 1
            }
        },
        methods: {
            currentChange(pageIndex) {

                this.currenPage = pageIndex;
            }
        }
    }
</script>

<style scoped lang="scss">
    .my-pagination {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 5px;
        margin: 5px 0px;

        > span {
            cursor: pointer;
            margin: 0 5px;
            color: #606266;
            min-width: 30px;
            border-radius: 2px;
            padding: 0 4px;
            background: #f4f4f5;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            height: 28px;
            line-height: 28px;
            text-align: center;

            &.active {
                background-color: #409eff;
                color: #fff;
            }
        }

    }


</style>
