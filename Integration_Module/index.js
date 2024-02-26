const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/execute', (req, res) => {
    const { a, b } = req.body;
    executeCommand(command)
        .then(({ stdout, stderr }) => {
            console.log(`C++ program output: ${stdout}`);
            res.send(stdout);
        })
        .catch(error => {
            console.error(`Error executing the C++ program: ${error.message}`);
            res.status(500).send('Internal Server Error');
        });
});

function executeCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else {
                resolve({ stdout, stderr });
            }
        });
    });
}

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
