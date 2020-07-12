const getDataBase = async (type, sourceId) => {
    let api = "";
    console.log(type);
    console.log(sourceId);
    if (type === 'mysql')
        api = "mysql/database/"
    return await window.axios({
        url: api + sourceId,
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

const main = {
    createConnection, getDataBase
}
export  default  main
