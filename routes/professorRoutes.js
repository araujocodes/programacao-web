const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');



router.get('/', professorController.listarProfessores);
router.post('/', professorController.adicionarProfessor);
router.get('/:id', professorController.buscarProfessorPorId);
router.put('/:id', professorController.atualizarProfessor);
router.delete('/:id', professorController.removerProfessor);
router.get('/:id/turmas', professorController.listarTurmasProfessor);
router.post('/:id/turmas', professorController.adicionarTurma);
router.get('/departamento/:departamento', professorController.listarProfessoresPorDepartamento);

module.exports = router;
