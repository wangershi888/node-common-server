const handleServerData = (req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0];
  if (method === "GET" && path === '/api/test') {
    let response = {
      data: {
        title: '互联网公司排名',
        xAxisData: ["百度", "阿里巴巴", "腾讯", "新浪"],
        seriesData: [200000, 300000, 400000, 200000]
      }
    }
    return response;
  }
}

module.exports = handleServerData;