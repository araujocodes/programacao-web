const mongoose = require('mongoose');

const turmaSchema = new mongoose.Schema({
    codigo: String,
    disciplina: String,
    alunos: [String],
});

const professorSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    nome: { type: String, required: true },
    idade: { type: Number, required: true },
    departamento: { type: String, required: true },
    turmas: [turmaSchema],
});

module.exports = mongoose.model('Professor', professorSchema);
