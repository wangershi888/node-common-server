const handleServerData = (req,res) => {
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];
    if(method === "GET" && path === '/api/test'){
        let array = [10,20,30,40];
        return array;
    }
}

module.exports = handleServerData;