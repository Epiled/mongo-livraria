import express from 'express';
import conecaNaDatabase from './config/dbConnect.js';
import routes from './routers/index.js';
const conexao = await conecaNaDatabase();

conexao.on('error', (erro) => {
  console.error('Erro de conexão', erro);
});

conexao.once('open', () => {
  console.log('Conexão com o banco feita com sucesso!')
});

const app = express();
app.use(express.json());
routes(app);

export default app;
