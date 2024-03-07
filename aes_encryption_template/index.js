const express = require('express');
const crypto = require('crypto');

const app = express();
const port = 3000;

app.use(express.json());
const key = crypto.randomBytes(16);

console.log('AES Key:', key.toString('hex'));

app.post('/encrypt', (req, res) => {
    const { text, key, iv } = req.body;

    if (!text || !key || !iv) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(iv, 'hex'));
    let encrypted = cipher.update(text, 'utf-8', 'hex');
    encrypted += cipher.final('hex');

    res.json({ encryptedText: encrypted });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
