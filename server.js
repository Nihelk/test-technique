const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api/moderation/predict', async (req, res) => {
  try {
    const { text, language } = req.body;
    const response = await axios.post('https://moderation.logora.fr/api/moderation/predict', { text, language });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/moderation/score', async (req, res) => {
  try {
    const { text, language } = req.body;
    const response = await axios.post('https://moderation.logora.fr/api/moderation/score', { text, language });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
