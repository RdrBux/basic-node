const fs = require('fs');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  let path = '';
  let statusCode = 200;
  switch (req.url) {
    case '/':
      path = 'index.html';
      break;
    case '/about':
      path = 'about.html';
      break;
    case '/contact-me':
      path = 'contact-me.html';
      break;
    default:
      path = '404.html';
      statusCode = 404;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.statusCode = statusCode;
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Listening at http://${hostname}:${port}/`);
});
