import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { handleSendEmail } from './server/apiHandler.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON & urlencoded forms
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// Email API Route
app.post('/api/send-email', handleSendEmail);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Navkar Realty Notification Server',
    timestamp: new Date().toISOString()
  });
});

// Serve production static assets from dist
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// SPA Fallback: serve index.html for any other request
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[Navkar Realty Production Server] Listening on http://localhost:${PORT}`);
  console.log(`[Email Service] Recipient: ${process.env.NOTIFICATION_RECIPIENT || 'realtynavkar61@gmail.com'}`);
});

