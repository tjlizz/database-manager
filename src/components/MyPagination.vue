<template>
    <div class="my-pagination">
        <el-select v-model="pageSize" placeholder="请选择" size="small" style="width: 100px">
            <el-option
                    v-for="item in sizeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>

        <el-button size="mini" class="el-icon-arrow-left" @click="pageIndex--"
                   :disabled="pageIndex===1?true:false"></el-button>
        <span @click="currentChange(n)" v-bind:class="{active:pageIndex==n}" v-for="n in pageCount"
              :key="n">{{n}}</span>
        <el-button size="mini" class="el-icon-arrow-right" @click="pageIndex++"
                   :disabled="pageIndex===pageCount"></el-button>
    </div>
</template>

<script>
    export default {
        name: 'MyPagination',
        props: ['totalCount'],
        data() {
            return {
                pageSize: 20,
                pageIndex: 1,
                pageCount: 10,
                sizeOptions: [
                    {label: '10条/页', value: 10},
                    {label: '20条/页', value: 20},
                    {label: '50条/页', value: 50}
                    , {label: '100条/页', value: 100}]
            }
        },
        methods: {
            currentChange(pageIndex) {
                this.pageIndex = pageIndex;
                this.$emit('pageChanged', {pageIndex: this.pageIndex, pageSize: this.pageSize})
            },
            resetPageCount() {
                this.pageCount = Math.ceil(this.totalCount / this.pageSize)
            }
        }, mounted() {
            this.resetPageCount()
            this.$emit('pageChanged', {pageIndex: this.pageIndex, pageSize: this.pageSize})
        }, watch: {
            pageIndex: function () {
                this.$emit('pageChanged', {pageIndex: this.pageIndex, pageSize: this.pageSize})
            },
            pageSize: function () {
                this.resetPageCount()
                this.$emit('pageChanged', {pageIndex: this.pageIndex, pageSize: this.pageSize})
            },
            totalCount: function () {
                this.resetPageCount()
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
