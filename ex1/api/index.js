import "dotenv/config";
import express from "express";
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';


console.log("Iniciando servidor..");
console.log("MY_SECRET", process.env.MY_SECRET);
console.log("PYTHON_ROOT", process.env.MY_OTHER_SECRET);

const app = express();

/* body-parset */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/*
const date = Date.parse(req.body.date);
const count = Number(req.body.count);*/
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


/*GETS */
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

/*DATA -----------------------------*/
let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};

let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

/* ------------------------ USERS --------------------------------- */


app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});

app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

app.put('/users', (req, res) => {
  return res.send('PUT HTTP method on user resource');
});

app.delete('/users', (req, res) => {
  return res.send('DELETE HTTP method on user resource');
});


app.get('/users', (req, res) => {
  return res.send('GET HTTP method on user resource');
});

app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

/*END*/

app.put('/users/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on user/${req.params.userId} resource`,
  );
});

app.delete('/users/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.userId} resource`,
  );
}); 


//** uuid */
app.post('/messages', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
  };

  messages[id] = message;

  return res.send(message);
});

app.post('/messages', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
  };

  messages[id] = message;

  return res.send(message);
});


app.use((req, res, next) => {
  // do something
  next();
});
