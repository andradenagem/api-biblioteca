const pool = require('../database/conexao');
// Função para listar todos os livros
const listarLivros = async () => {
  const resultado = await pool.query('SELECT * FROM livros');
  return resultado.rows;
};
// Função para buscar um livro por ID
const buscarLivroPorId = async (id) => {
  const resultado = await pool.query('SELECT * FROM livros WHERE id = $1', [id]);
  return resultado.rows[0];
};
// Função para adicionar um novo livro
const adicionarLivro = async (titulo, autor, ano) => {
  await pool.query('INSERT INTO livros (titulo, autor, ano) VALUES ($1, $2, $3)', [titulo, autor, ano]);
};
// Função para atualizar um livro
const atualizarLivro = async (id, titulo, autor, ano) => {
  await pool.query('UPDATE livros SET titulo = $1, autor = $2, ano = $3 WHERE id = $4', [titulo, autor, ano, id]);
};
// Função para deletar um livro
const deletarLivro = async (id) => {
  await pool.query('DELETE FROM livros WHERE id = $1', [id]);
};
module.exports = {
  listarLivros,
  buscarLivroPorId,
  adicionarLivro,
  atualizarLivro,
  deletarLivro
};
