/*const {frutas, dinero} = require("./frutas");*/
/*const cowsay = require ("cowsay")*/

/*console.log(
    cowsay.say({
      text: "I'm a moooodule",
      e: "Oo",
      T: "U",
    })
  );*/


/*frutas.forEach((fruta) => {
  console.count(fruta);
});

console.log("mi dinero actual: ", dinero);*/


/*servidor HTTP*/

/*const http = require("http");

const port = 3000;*/

/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello, World!</h1>");
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});*/

/* servidor con express*/

const express = require ("express");
const app = express ();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

  // Motor de plantilla
app.set("view engine", "ejs");

 /*midelware para llamar static files desde public file*/

  app.use(express.static(__dirname + '/public'));

 /* ruta sencilla*/

 app.get("/contacto", (req, res) => {
    res.send("ruta de contacto");
  });


  /*midelware 404*/

  app.use ((req, res, next) => {
    res.status(404). sendFile (__dirname + "/public/404.html")
})
