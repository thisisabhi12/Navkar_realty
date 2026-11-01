import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { handleSendEmail } from './server/apiHandler.js';

dotenv.config();

// Vite plugin to provide /api/send-email during development and preview
function emailApiPlugin() {
  return {
    name: 'email-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/send-email', (req, res, next) => {
        handleSendEmail(req, res).catch(next);
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/send-email', (req, res, next) => {
        handleSendEmail(req, res).catch(next);
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), emailApiPlugin()],
  server: {
    port: 3000,
    open: false
  }
});
