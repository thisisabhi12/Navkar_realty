import dotenv from 'dotenv';
dotenv.config();
import { handleSendEmail } from '../server/apiHandler.js';

export default async function handler(req, res) {
  return handleSendEmail(req, res);
}
