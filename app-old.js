const http = require('http');


http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'David',
            Edad: 32,
            url: req.url
        };

        res.write(JSON.stringify(salida));


        // res.write("Hola Mundo");
        res.end();
    })
    .listen(8080);

console.log("esuchado el puerto 8080");