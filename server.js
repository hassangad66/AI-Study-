// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const path = require('path');
const OpenAI = require('openai');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Multer for file uploads (memory storage)
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } });

// Build a helpful prompt based on the requested type
function buildPrompt(type, text) {
  const header = `You are an expert educational assistant. Given the source text below, produce the requested output clearly and concisely.\n\nSOURCE TEXT:\n${text}\n\nOUTPUT (${type.toUpperCase()}):\n`;
  if (type === 'summary') {
    return header + 'Give a concise summary (4-8 sentences), highlighting the key points and structure.';
  } else if (type === 'quiz') {
    return header + 'Create a short quiz of 5 multiple-choice questions with 4 options each. Mark the correct answer.';
  } else if (type === 'flashcards') {
    return header + "Generate 10 concise flashcards in the format 'Term: Definition'.";
  }
  return header + 'Provide a helpful transformation of the text.';
}

// Endpoint: process pasted text
app.post('/process-text', async (req, res) => {
  try {
    const { type, text } = req.body;
    if (!type || !text) return res.status(400).json({ error: 'Missing type or text.' });

    const safeText = text.length > 30000 ? text.slice(0, 30000) : text; // safety limit
    const prompt = buildPrompt(type, safeText);

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant specialized in study materials.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 1000,
      temperature: 0.2,
    });

    const reply = completion?.choices?.[0]?.message?.content ?? 'No response from AI.';
    res.json({ ok: true, output: reply });
  } catch (err) {
    console.error('process-text error:', err);
    res.status(500).json({ error: 'Server error processing text.' });
  }
});

// Endpoint: upload PDF, extract text, then process
app.post('/upload-pdf', upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No PDF uploaded.' });
    const { type } = req.body;
    if (!type) return res.status(400).json({ error: 'Missing type parameter.' });

    // Extract text
    const data = await pdfParse(req.file.buffer);
    const extractedText = data.text || '';
    if (!extractedText.trim()) return res.status(400).json({ error: 'Could not extract text from PDF.' });

    const safeText = extractedText.length > 30000 ? extractedText.slice(0, 30000) : extractedText;
    const prompt = buildPrompt(type, safeText);

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant specialized in study materials.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 1200,
      temperature: 0.2,
    });

    const reply = completion?.choices?.[0]?.message?.content ?? 'No response from AI.';
    res.json({ ok: true, output: reply });
  } catch (err) {
    console.error('upload-pdf error:', err);
    res.status(500).json({ error: 'Server error processing PDF.' });
  }
});

// Fallback route (serve index.html via static middleware)
app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
