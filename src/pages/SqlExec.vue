<template>
    <el-form :model="sqlData" :inline="true">
        <el-form-item label="显示条数">
            <el-select v-model="sqlData.count" placeholder="显示条数" style="width: 100px">
                <el-option label="20" value="20"></el-option>
                <el-option label="50" value="50"></el-option>
                <el-option label="100" value="100"></el-option>
                <el-option label="200" value="200"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-input type="input" v-model="sqlData.sqlText" placeholder="查询条件" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'SqlExec',
        data() {
            return {
                sqlData: {
                    sqlText: '',
                    count: 50
                }
            }
        },
        methods: {
            onSubmit() {
                // eslint-disable-next-line no-debugger
                debugger
                this.$emit('search', this.sqlData)
            }
        }
    }
</script>

<style scoped>

</style>
