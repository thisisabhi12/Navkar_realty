import dotenv from 'dotenv';
dotenv.config();
import { sendLeadNotification } from '../../server/emailService.js';

export async function handler(event, context) {
  // CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, message: 'Method Not Allowed' })
    };
  }

  try {
    const payload = JSON.parse(event.body || '{}');
    const clientIp = event.headers['client-ip'] || event.headers['x-forwarded-for'] || '';
    const result = await sendLeadNotification({ ...payload, clientIp });

    return {
      statusCode: result.status || (result.success ? 200 : 400),
      headers,
      body: JSON.stringify(result)
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: err.message || 'Internal server error while processing inquiry.'
      })
    };
  }
}

