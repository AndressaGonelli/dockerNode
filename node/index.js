const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(NAME) VALUES('Andressa Gonelli')`;
connection.query(sql);

const obterResultados = () => {
  return new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) reject("Erro ao conectar");
      connection.query("SELECT * FROM people", (err, result) => {
        if (err) {
          reject("Erro ao executar Query");
        } else {
          resolve(result);
        }
      });
    });
  });
};

async function formatarRetorno() {
  try {
    const resultados = await obterResultados();
    return (
      `
    <table>
    <tr>
        <th>Id</th>
        <th>Name</th>
    </tr>` +
      resultados.map((i) => {
        return "<tr><td>" + i.id + "</td><td>" + i.name + "</td>";
      }).join("") +
      "</table>"
    );
  } catch (erro) {
    console.error(erro);
  }
}

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});


app.get("/", async (req, res) => {
  const table = await formatarRetorno();
  res.send("<h1>Full Cycle</h1><br />" + table);
});


