const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const cors = require('cors');

const professorRoutes = require('./routes/professorRoutes');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/school', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Conectado ao MongoDB"))
    .catch(err => console.log(err));

app.use('/professores', professorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
