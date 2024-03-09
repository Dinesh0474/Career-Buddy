const express = require("express");
const app = express();
const PORT = 5000;
app.use(express.json());





app.get('/nodes', async (req, res) => {
    const result = await pool.query('SELECT * FROM Node');
    res.json(result.rows);
});

app.get('/edges', async (req, res) => {
    const result = await pool.query('SELECT * FROM Edge');
    res.json(result.rows);
});

app.listen(PORT,(req,res) => {
    console.log(`Server runnin on port ${PORT}`);
})
