const getDataBase = async (sourceId) => {
    return await window.axios({
        url: 'v1/database/' + sourceId,
        metnod: 'get'
    })
}
const createConnection = async (connection) => {
    const data = await window.axios({
        method: "post",
        url: "connection/",
        data: connection
    })
    return data
}

const getColumns = async (sourceId, tableName) => {

    const data = await window.axios({
        method: 'post',
        url: 'v1/columns/' + sourceId,
        data: {tableName}
    })
    return data;

}

const getTables = async (sourceId, dataBaseName) => {

    const data = await window.axios({
        method: 'get',
        url: 'v1/table/' + sourceId + "/" + dataBaseName
    })
    return data
}
const main = {
    createConnection, getDataBase, getColumns, getTables
}
export default main
