import "dotenv/config";
import express from "express";
import cors from 'cors';

console.log("Iniciando servidor..");
console.log("MY_SECRET", process.env.MY_SECRET);
console.log("PYTHON_ROOT", process.env.MY_OTHER_SECRET);

const app = express();

var corsOptions = {
  origin: ['http://example.com', '*'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

function randomNumber() {
  var result = Math.floor(Math.random() * 1000000);
  return result;
}
const frases = [
  "Você é mais forte do que imagina",
  "Acredite em si mesmo e você será imparável",
  "Cada dia é uma nova oportunidade para brilhar",
  "Se você pode sonhar, pode realizar",
  "A persistência leva ao sucesso",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia",
  "Não pare quando estiver cansado, pare quando tiver terminado",
  "Não tenha medo de fracassar, tenha medo de não tentar",
  "O futuro pertence àqueles que não desistem",
  "A melhor maneira de prever o futuro é criá-lo",
  "Sonhos são caminhos construídos pelo coração.",
  "RECEBA!",
  "Impossível é uma palavra que serve só de enfeite no dicionário",
  "Permita que o seu corpo descanse",
  "Por trás de um dia difícil, há uma versão forte de você que sempre seguiu em frente",
  "Tem uma força dentro de você que é capaz de sempre te surpreender",
  "Essa mensagem tem um único objetivo: te ver sorrindo",
]
const fraseAleat = () => {
  const index = Math.floor(Math.random() * frases.length);
  return frases[index]
}
app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log(`${req.method} - ${req.path} - ${req.ip}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Bem vindo ao Express de Gabriel Santos!");
});

app.get('/random', function (req, res) {
  res.json('number: ' + randomNumber())
});

app.get("/inspiration", function (req, res) {
  res.json("quote: " + fraseAleat())
}
)
app.get("/example", (req, res) => {
  res.send("Bem vindo ao exemplo");
});

app.listen(3000, () => {
  console.log("Servidor funcionando na porta: 3000");
  console.log("Acesse http://localhost:3000");
});
