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

export {getDataBase}
