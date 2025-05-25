const express = require('express');
const app = express();
const livrosRoutes = require('./routes/livrosroutes');

// Middleware
app.use(express.json());
// Usar rotas
app.use('/', livrosRoutes);
// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});