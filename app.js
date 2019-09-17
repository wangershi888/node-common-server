const queryString = require('querystring');

const handleServerRouter = require('./src/router/serverData');

const serverHandle = (req,res) =>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.setHeader('Access-Control-Allow-Methods','PUT,POST,GET,PATCH,DELETE,OPTIONS');
    res.setHeader('Content-Type','application/json;charset=utf-8');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    req.query = queryString.parse(req.url.split('?')[1]);
    const result = handleServerRouter(req,res);
    if(result){
        const asdf = JSON.stringify(result);
        res.end(asdf);
    }
    return;
}

module.exports = serverHandle;