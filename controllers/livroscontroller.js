const Livro = require('../models/livrosmodels');
// Listar todos os livros
const listarLivros = async (req, res) => {
  try {
    const livros = await Livro.listarLivros();
    res.status(200).json(livros);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao listar livros' });
  }
};
// Buscar livro por ID
const buscarLivroPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const livro = await Livro.buscarLivroPorId(id);
    if (livro) {
      res.status(200).json(livro);
    } else {
      res.status(404).json({ mensagem: 'Livro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar livro' });
  }
};
// Adicionar livro
const adicionarLivro = async (req, res) => {
  const { titulo, autor, ano } = req.body;
  console.log('Recebido:', titulo, autor, ano); // :apontando_para_a_esquerda: debug
  try {
    await Livro.adicionarLivro(titulo, autor, ano);
    res.status(201).json({ mensagem: 'Livro adicionado com sucesso' });
  } catch (error) {
    console.error('Erro ao adicionar livro:', error); // :apontando_para_a_esquerda: debug
    res.status(500).json({ mensagem: 'Erro ao adicionar livro' });
  }
};
// Atualizar livro
const atualizarLivro = async (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano } = req.body;
  try {
    await Livro.atualizarLivro(id, titulo, autor, ano);
    res.status(200).json({ mensagem: 'Livro atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar livro' });
  }
};
// Deletar livro
const deletarLivro = async (req, res) => {
  const { id } = req.params;
  try {
    await Livro.deletarLivro(id);
    res.status(200).json({ mensagem: 'Livro deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar livro' });
  }
};
module.exports = {
  listarLivros,
  buscarLivroPorId,
  adicionarLivro,
  atualizarLivro,
  deletarLivro
};
