const Professor = require('../models/Professor');


exports.listarProfessores = async (req, res) => {
    try {
        const professores = await Professor.find();
        res.json(professores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.buscarProfessorPorId = async (req, res) => {
    try {
        const professor = await Professor.findOne({ id: req.params.id });
        if (!professor) return res.status(404).json({ message: 'Id não existente' });
        res.json(professor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.listarTurmasProfessor = async (req, res) => {
    try {
        const professor = await Professor.findOne({ id: req.params.id });
        if (!professor) return res.status(404).json({ message: 'Id não existente' });
        res.json(professor.turmas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.atualizarProfessor = async (req, res) => {
    try {
        const professor = await Professor.findOneAndUpdate(
            { id: req.params.id },
            req.body,
            { new: true }
        );
        if (!professor) return res.status(404).json({ message: 'Id não existente' });
        res.json(professor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.adicionarProfessor = async (req, res) => {
    try {
        if (Array.isArray(req.body)) {
            const professores = await Professor.insertMany(req.body);
            res.status(201).json(professores);
        } else {
            const novoProfessor = new Professor(req.body);
            const professor = await novoProfessor.save();
            res.status(201).json(professor);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.adicionarTurma = async (req, res) => {
    try {
        const professor = await Professor.findOne({ id: req.params.id });
        if (!professor) return res.status(404).json({ message: 'Id não existente' });

        professor.turmas.push(req.body);
        await professor.save();
        res.json(professor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listarProfessoresPorDepartamento = async (req, res) => {
    try {
        const professores = await Professor.find({ departamento: req.params.departamento });
        res.json(professores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.removerProfessor = async (req, res) => {
    try {
        const professor = await Professor.findOneAndDelete({ id: req.params.id });
        if (!professor) return res.status(404).json({ message: 'Id não existente' });
        res.json({ message: 'Professor removido com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
