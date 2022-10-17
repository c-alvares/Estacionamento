require('dotenv').config();
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const app = express()
    .use(express.json())
    .use(cors())
    
app.listen(PORT, () => {
    console.log('Servido em execução na porta ' + PORT);
});