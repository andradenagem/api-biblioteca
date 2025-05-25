const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livroscontroller');
// Rotas
router.get('/livros', livrosController.listarLivros);
router.get('/livros/:id', livrosController.buscarLivroPorId);
router.post('/livros', livrosController.adicionarLivro);
router.put('/livros/:id', livrosController.atualizarLivro);
router.delete('/livros/:id', livrosController.deletarLivro);
module.exports = router; // <- CORRIGIDO AQUI
