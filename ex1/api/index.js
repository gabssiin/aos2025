import "dotenv/config";
import express from "express";
import cors from 'cors';

console.log("Iniciando servidor..");
console.log("MY_SECRET", process.env.MY_SECRET);
console.log("PYTHON_ROOT", process.env.MY_OTHER_SECRET);

const app = express();
app.use(cors());

app.use((req,res,next)=>{
  console.log(`${req.method} - ${req.path} - ${req.ip}`);
    next();
});

app.get("/", (req, res) => {
  res.send("Bem vindo ao Express de Gabriel Santos!");
});

app.get("/example", (req,res)=>{
  res.send("Bem vindo ao exemplo");
});

app.listen(3000, () => {
  console.log("Servidor funcionando na porta: 3000");
  console.log("Acesse http://localhost:3000");
});
