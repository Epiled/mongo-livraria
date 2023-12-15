import http from 'http';

const PORT = 3000;

const rotas = {
  '/': 'Curso de Node.js',
  '/livros': 'Rota dos Livros',
  '/autores': 'Rota de Autores não a muitos',
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  })
  res.end(rotas[req.url]);
})

server.listen(PORT, () => {
  console.log('Servidor rodando!');
})

