const queryString = require('querystring');

const handleServerRouter = require('./src/router/serverData');

const serverHandle = (req,res) =>{
    req.query = queryString.parse(req.url.split('?')[1]);
    const result = handleServerRouter(req,res);
    if(result){
        const asdf = JSON.stringify(result);
        res.end(asdf);
    }
    return;
}

module.exports = serverHandle;