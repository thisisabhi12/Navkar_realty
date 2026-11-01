import { sendLeadNotification } from './emailService.js';

// Helper to safely parse JSON body from incoming stream or pre-parsed object
async function getRequestBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }
  
  if (typeof req.body === 'string' && req.body.length > 0) {
    try {
      return JSON.parse(req.body);
    } catch (e) {
      return {};
    }
  }

  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(new Error('Invalid JSON payload in request body'));
      }
    });
    req.on('error', err => reject(err));
  });
}

// Universal API Handler for send-email endpoint
export async function handleSendEmail(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: false, message: 'Method Not Allowed. Use POST.' }));
    return;
  }

  try {
    const body = await getRequestBody(req);
    
    // Extract client IP if available
    const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '';
    const payload = {
      ...body,
      clientIp: Array.isArray(clientIp) ? clientIp[0] : clientIp.split(',')[0].trim()
    };

    const result = await sendLeadNotification(payload);

    res.statusCode = result.status || (result.success ? 200 : 400);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  } catch (err) {
    console.error('[API Handler Error]', err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: false,
      message: err.message || 'Internal server error while processing inquiry.'
    }));
  }
}
