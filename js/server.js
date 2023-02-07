const http = require("http");

const host = "localhost";

/* port 300 */
const port = "8000";

/* http://localhost:8000 */

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Hello, server working well!")
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Сервер запущен на http://${host}:${port}`)
});

const obj = {
    b: '1',
    c: '2',
    id: 1,
    firstName: 'Иван',
    lastName: 'Иванов'
}

console.log(obj.firstName, obj.lastName);