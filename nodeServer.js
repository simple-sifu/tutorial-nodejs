const http = require('http');

const server = http.createServer((req, res) => {
    const { headers, url, method } = req;
    console.log(`method=${method},  url=${url}, header= ${JSON.stringify(headers)}`);
    res.end();
})

const PORT = 8000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))