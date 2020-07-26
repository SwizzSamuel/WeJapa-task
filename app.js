const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/' && method === "GET") {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>WeJapa</title></head>')
        res.write('<body>Welcome to Wejapa Internships.</body>')
        res.write('</html>')
        res.end()
    }
})

server.listen(3009);