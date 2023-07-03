import LivroController from "../controllers/livroController.js";
import Express from "express";

const router = Express.Router();
    
router
  .get("/livros", LivroController.listarLivros)
  .get("/livros/busca", LivroController.ListarLivroPorFiltro)  // http://localhost:3000/livros/busca?minPaginas=100&maxPaginas=400
  .get("/livros/:id", LivroController.PegaLivro)
  .post("/livros", LivroController.CadastrarLivro)
  .put("/livros/:id", LivroController.AtualizaLivro)
  .delete("/livros/:id", LivroController.excluirLivro);





export default router;