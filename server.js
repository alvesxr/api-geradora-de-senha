//npm init -y para criar o package.json
//npm install express para instalar o express //colocar type : module no package.json
//npm install nodemon -D para instalar o nodemon como dev dependency
// para rodar o servidor com nodemon
//npm install express@4.18.2

import express from 'express' //importando o express
import { gerarSenha } from './controllers/senhaController.js'  //importando a função gerarSenha da pasta controller

const server = express() //instanciando o express

//request é o que o cliente envia para o servidor
//response é o que o servidor envia para o cliente
/*
const server = createServer((req, res) => {
  res.write('Palmeiras eh o melhor time do mundo')
  res.end() //se não colocar o end, o servidor fica esperando o cliente responder
  res.end('Palmeiras é o melhor time do mundo') //outra forma de fazer
})
*/

server.get('/senha', (req, res) => {
  const tamanho = parseInt(req.query.tamanho) || 8; // Tamanho da senha, padrão é 8
  const incluir_letra_maiuscula = req.query.maiusculas === 'true'; // Converte string para boolean
  const numeros = req.query.numeros === 'true';
  const simbolos = req.query.simbolos === 'true';

  // Chama a função gerarSenha com os argumentos corretos
  const senha = gerarSenha(tamanho, incluir_letra_maiuscula, numeros, simbolos);

  // Retorna a senha gerada em formato JSON
  res.json({
    senha, // Senha gerada
  });
});

server.listen(3666) //servindo na porta 3666
console.log('Servidor rodando na porta 3666') //mensagem de sucesso