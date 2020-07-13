<template>
    <el-form :model="sqlData">
        <el-form-item>
            <el-input type="textarea" v-model="sqlData.sqlText"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'SqlExec',
        data() {
            return {
                sqlData: {
                    sqlText: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log(this.sqlData)
            }
        }
    }
</script>

<style scoped>

</style>
