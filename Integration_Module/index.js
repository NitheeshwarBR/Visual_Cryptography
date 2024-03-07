const express = require('express');
const { execFile } = require('child_process');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/execute', (req, res) => {
    const { a, b } = req.body;

    // Input validation
    if (!Number.isInteger(Number(a)) || !Number.isInteger(Number(b))) {
        return res.status(400).send('Inputs must be integers');
    }

    execFile('./addProgram', [a, b], (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing the C++ program: ${error.message}`);
            return res.status(500).send('Internal Server Error');
        }
        console.log(`C++ program output: ${stdout}`);
        res.send(stdout);
    });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
