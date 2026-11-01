import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to escape HTML to prevent XSS / HTML injection in emails
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Format date into IST (Indian Standard Time)
export function formatISTDate(date = new Date()) {
  try {
    return new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    }).format(date);
  } catch (e) {
    return date.toLocaleString('en-IN') + ' (IST)';
  }
}

// Validate email format
export function isValidEmail(email) {
  if (!email) return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Validate phone number (minimum 7 characters, allows digits, +, -, space)
export function isValidPhone(phone) {
  if (!phone) return false;
  const cleaned = String(phone).replace(/[\s\-\(\)\.]/g, '');
  return cleaned.length >= 7 && /^\+?[0-9]+$/.test(cleaned);
}

// Create or retrieve email transporter
export async function getTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT) || 465;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  // If live SMTP credentials are configured, use them
  if (user && pass && user !== 'your-email@gmail.com') {
    return {
      transporter: nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
        tls: {
          rejectUnauthorized: false
        }
      }),
      isTest: false,
      sender: user
    };
  }

  // Fallback for local development/testing when SMTP_PASS is not yet provided:
  // Use Ethereal test account or local logging transporter so testing works immediately
  try {
    const testAccount = await nodemailer.createTestAccount();
    const testTransporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });
    return {
      transporter: testTransporter,
      isTest: true,
      testAccount,
      sender: testAccount.user
    };
  } catch (err) {
    // If ethereal network is unreachable in sandbox, use json / log transporter
    const jsonTransporter = nodemailer.createTransport({
      jsonTransport: true
    });
    return {
      transporter: jsonTransporter,
      isTest: true,
      sender: 'noreply@navkarrealty.com'
    };
  }
}

// Construct responsive HTML template for email
export function generateEmailHtml(data) {
  const {
    formType = 'General Inquiry',
    fullName = '',
    phone = '',
    email = '',
    message = '',
    property = null,
    preferredLocality = '',
    propertyType = '',
    needLoanAssistance = null,
    date = '',
    timeSlot = '',
    meetingType = '',
    interest = '',
    pageUrl = '',
    submittedAt = new Date(),
    clientIp = ''
  } = data;

  const formattedDate = formatISTDate(new Date(submittedAt));
  const safeName = escapeHtml(fullName || 'Valued Client');
  const safePhone = escapeHtml(phone);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);
  const safeFormType = escapeHtml(formType);
  const safePageUrl = escapeHtml(pageUrl);

  const cleanPhone = safePhone.replace(/[^0-9+]/g, '');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${safeFormType} - Navkar Realty</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #F4F7F4;
      color: #202923;
    }
    .wrapper {
      width: 100%;
      table-layout: fixed;
      background-color: #F4F7F4;
      padding: 24px 0;
    }
    .container {
      max-width: 620px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
      border: 1px solid #DCE5DD;
    }
    .header {
      background: linear-gradient(135deg, #104D2A 0%, #092615 100%);
      color: #ffffff;
      padding: 28px 24px;
      text-align: center;
    }
    .badge {
      display: inline-block;
      background-color: #176B3A;
      color: #ffffff;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 4px 12px;
      border-radius: 999px;
      margin-bottom: 12px;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .header h1 {
      margin: 0 0 6px 0;
      font-size: 24px;
      font-weight: 800;
      letter-spacing: -0.5px;
    }
    .header p {
      margin: 0;
      font-size: 13px;
      color: #DCEBDD;
    }
    .content {
      padding: 24px;
    }
    .section-title {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #104D2A;
      margin: 20px 0 10px 0;
      padding-bottom: 6px;
      border-bottom: 2px solid #E3ECE4;
    }
    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 16px;
    }
    .data-table td {
      padding: 10px 12px;
      font-size: 13px;
      border-bottom: 1px solid #F0F4F1;
      vertical-align: top;
    }
    .data-table td.label {
      width: 38%;
      color: #66716A;
      font-weight: 600;
    }
    .data-table td.value {
      width: 62%;
      color: #202923;
      font-weight: 700;
    }
    .property-card {
      background-color: #F0F6F0;
      border: 1px solid #DCE5DD;
      border-radius: 12px;
      padding: 16px;
      margin: 16px 0;
    }
    .property-title {
      font-size: 16px;
      font-weight: 800;
      color: #104D2A;
      margin: 0 0 4px 0;
    }
    .property-meta {
      font-size: 12px;
      color: #66716A;
      margin: 0 0 8px 0;
    }
    .message-box {
      background-color: #FAFBF9;
      border-left: 4px solid #176B3A;
      padding: 14px 16px;
      border-radius: 4px 8px 8px 4px;
      font-size: 13px;
      line-height: 1.6;
      color: #202923;
      white-space: pre-wrap;
      margin: 12px 0;
    }
    .actions {
      text-align: center;
      padding: 16px 0 8px 0;
    }
    .btn {
      display: inline-block;
      background-color: #176B3A;
      color: #ffffff !important;
      text-decoration: none;
      font-size: 13px;
      font-weight: 700;
      padding: 10px 20px;
      border-radius: 8px;
      margin: 4px;
    }
    .btn-secondary {
      background-color: #202923;
    }
    .footer {
      background-color: #F8FAF8;
      border-top: 1px solid #DCE5DD;
      padding: 18px 24px;
      font-size: 11px;
      color: #66716A;
      line-height: 1.5;
    }
    .footer strong {
      color: #202923;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      
      <!-- Brand Header -->
      <div class="header">
        <div class="badge">${safeFormType}</div>
        <h1>Navkar Realty Lead Alert</h1>
        <p>A new customer submission has been received from the website.</p>
      </div>

      <!-- Main Body -->
      <div class="content">
        
        <!-- Customer Details -->
        <div class="section-title">Customer Information</div>
        <table class="data-table">
          <tr>
            <td class="label">Full Name:</td>
            <td class="value">${safeName}</td>
          </tr>
          <tr>
            <td class="label">Contact Phone:</td>
            <td class="value">
              <a href="tel:${cleanPhone}" style="color: #176B3A; text-decoration: none;">${safePhone}</a>
            </td>
          </tr>
          <tr>
            <td class="label">Email Address:</td>
            <td class="value">
              ${safeEmail ? `<a href="mailto:${safeEmail}" style="color: #176B3A; text-decoration: none;">${safeEmail}</a>` : '<span style="color:#88928A; font-weight:normal;">Not provided</span>'}
            </td>
          </tr>
        </table>

        <!-- Property Information (if applicable) -->
        ${property ? `
        <div class="section-title">Associated Property</div>
        <div class="property-card">
          <div class="property-title">${escapeHtml(property.title || 'Selected Property')}</div>
          <div class="property-meta">${escapeHtml(property.type || '')} &bull; ${escapeHtml(property.location || '')}, Vadodara</div>
          <table class="data-table" style="margin-bottom: 0;">
            ${property.priceDisplay ? `
            <tr>
              <td class="label" style="border:none; padding: 4px 0;">Starting Price:</td>
              <td class="value" style="border:none; padding: 4px 0; color: #176B3A;">${escapeHtml(property.priceDisplay)}</td>
            </tr>` : ''}
            ${property.superArea ? `
            <tr>
              <td class="label" style="border:none; padding: 4px 0;">Super Built-up:</td>
              <td class="value" style="border:none; padding: 4px 0;">${escapeHtml(property.superArea)}</td>
            </tr>` : ''}
            ${property.fullAddress ? `
            <tr>
              <td class="label" style="border:none; padding: 4px 0;">Address:</td>
              <td class="value" style="border:none; padding: 4px 0; font-weight: normal; color: #66716A;">${escapeHtml(property.fullAddress)}</td>
            </tr>` : ''}
          </table>
        </div>
        ` : ''}

        <!-- Consultation / Site Visit / Inquiry Details -->
        <div class="section-title">Requirement & Request Details</div>
        <table class="data-table">
          ${date ? `
          <tr>
            <td class="label">Preferred Date:</td>
            <td class="value">${escapeHtml(date)}</td>
          </tr>` : ''}
          ${timeSlot ? `
          <tr>
            <td class="label">Preferred Time Slot:</td>
            <td class="value">${escapeHtml(timeSlot)}</td>
          </tr>` : ''}
          ${meetingType ? `
          <tr>
            <td class="label">Consultation Mode:</td>
            <td class="value">${escapeHtml(meetingType)}</td>
          </tr>` : ''}
          ${interest ? `
          <tr>
            <td class="label">Primary Interest:</td>
            <td class="value">${escapeHtml(interest)}</td>
          </tr>` : ''}
          ${preferredLocality ? `
          <tr>
            <td class="label">Preferred Locality:</td>
            <td class="value">${escapeHtml(preferredLocality)}</td>
          </tr>` : ''}
          ${propertyType ? `
          <tr>
            <td class="label">Property Requirement:</td>
            <td class="value">${escapeHtml(propertyType)}</td>
          </tr>` : ''}
          ${needLoanAssistance !== null ? `
          <tr>
            <td class="label">Home Loan Assistance:</td>
            <td class="value">${needLoanAssistance ? '<span style="color:#104D2A;">Yes (SBI / HDFC / ICICI Assistance Requested)</span>' : 'No'}</td>
          </tr>` : ''}
        </table>

        <!-- Message / Notes -->
        ${safeMessage ? `
        <div class="section-title">Customer Message / Special Requirements</div>
        <div class="message-box">${safeMessage}</div>
        ` : ''}

        <!-- Direct Action Buttons -->
        <div class="actions">
          <a href="tel:${cleanPhone}" class="btn">Call Client (${safePhone})</a>
          <a href="https://wa.me/${cleanPhone.replace('+', '')}?text=${encodeURIComponent(`Hello ${safeName}, thank you for contacting Navkar Realty. Regarding your inquiry on ${property?.title || 'our properties'}...`)}" class="btn btn-secondary">WhatsApp Client</a>
        </div>

      </div>

      <!-- Audit / Submission Metadata Footer -->
      <div class="footer">
        <p style="margin: 0 0 6px 0;"><strong>Submission Date/Time:</strong> ${formattedDate}</p>
        <p style="margin: 0 0 6px 0;"><strong>Page URL:</strong> <a href="${safePageUrl}" style="color: #176B3A; word-break: break-all;">${safePageUrl}</a></p>
        ${clientIp ? `<p style="margin: 0 0 6px 0;"><strong>Client IP:</strong> ${escapeHtml(clientIp)}</p>` : ''}
        <p style="margin: 10px 0 0 0; color: #88928A; font-size: 10px;">
          This email was sent automatically by the Navkar Realty website form dispatch system. Recipient: realtynavkar61@gmail.com
        </p>
      </div>

    </div>
  </div>
</body>
</html>
  `;
}

// Construct plain text fallback
export function generateEmailText(data) {
  const {
    formType = 'General Inquiry',
    fullName = '',
    phone = '',
    email = '',
    message = '',
    property = null,
    preferredLocality = '',
    propertyType = '',
    needLoanAssistance = null,
    date = '',
    timeSlot = '',
    meetingType = '',
    interest = '',
    pageUrl = '',
    submittedAt = new Date(),
    clientIp = ''
  } = data;

  const formattedDate = formatISTDate(new Date(submittedAt));

  let text = `====================================================\n`;
  text += `NAVKAR REALTY - NEW LEAD NOTIFICATION\n`;
  text += `Form Type: ${formType}\n`;
  text += `Submission Date & Time (IST): ${formattedDate}\n`;
  text += `====================================================\n\n`;

  text += `CUSTOMER DETAILS:\n`;
  text += `- Name: ${fullName}\n`;
  text += `- Phone: ${phone}\n`;
  text += `- Email: ${email || 'Not provided'}\n\n`;

  if (property) {
    text += `ASSOCIATED PROPERTY:\n`;
    text += `- Title: ${property.title || 'Selected Property'}\n`;
    text += `- Location: ${property.location || ''}, Vadodara\n`;
    if (property.type) text += `- Type: ${property.type}\n`;
    if (property.priceDisplay) text += `- Price: ${property.priceDisplay}\n`;
    if (property.superArea) text += `- Super Built-up: ${property.superArea}\n`;
    if (property.fullAddress) text += `- Address: ${property.fullAddress}\n`;
    text += `\n`;
  }

  text += `INQUIRY / CONSULTATION DETAILS:\n`;
  if (date) text += `- Preferred Date: ${date}\n`;
  if (timeSlot) text += `- Preferred Time Slot: ${timeSlot}\n`;
  if (meetingType) text += `- Consultation Mode / Venue: ${meetingType}\n`;
  if (interest) text += `- Interest: ${interest}\n`;
  if (preferredLocality) text += `- Locality: ${preferredLocality}\n`;
  if (propertyType) text += `- Requirement: ${propertyType}\n`;
  if (needLoanAssistance !== null) text += `- Loan Assistance Needed: ${needLoanAssistance ? 'Yes' : 'No'}\n`;
  text += `\n`;

  if (message) {
    text += `CUSTOMER MESSAGE:\n`;
    text += `${message}\n\n`;
  }

  text += `METADATA:\n`;
  text += `- Page URL: ${pageUrl}\n`;
  if (clientIp) text += `- Client IP: ${clientIp}\n`;
  text += `- Intended Recipient: realtynavkar61@gmail.com\n`;
  text += `====================================================\n`;

  return text;
}

// Main function to validate and send email
export async function sendLeadNotification(formData) {
  // 1. Validation
  const errors = [];

  const name = (formData.fullName || formData.name || '').trim();
  const phone = (formData.phone || '').trim();
  const email = (formData.email || '').trim();
  const honeypot = (formData.website_hp || '').trim();

  // Bot detection via honeypot
  if (honeypot) {
    return {
      success: true,
      message: 'Submission received successfully.',
      isSpam: true
    };
  }

  if (!name || name.length < 2) {
    errors.push('Please provide your full name (at least 2 characters).');
  }

  if (!phone || !isValidPhone(phone)) {
    errors.push('Please provide a valid contact phone number.');
  }

  if (email && !isValidEmail(email)) {
    errors.push('Please provide a valid email address.');
  }

  if (errors.length > 0) {
    return {
      success: false,
      status: 400,
      message: errors.join(' '),
      errors
    };
  }

  // 2. Prepare payload
  const recipient = process.env.NOTIFICATION_RECIPIENT || 'realtynavkar61@gmail.com';
  const formType = formData.formType || 'Property Inquiry';
  const subject = `[Navkar Realty Lead] ${formType}: ${name} (${phone})`;

  const normalizedData = {
    ...formData,
    fullName: name,
    phone,
    email,
    submittedAt: formData.submittedAt || new Date().toISOString()
  };

  const htmlContent = generateEmailHtml(normalizedData);
  const textContent = generateEmailText(normalizedData);

  // 3. Acquire transporter
  const { transporter, isTest, testAccount, sender } = await getTransporter();

  const mailOptions = {
    from: process.env.NOTIFICATION_SENDER || `"Navkar Realty Desk" <${sender || 'realtynavkar61@gmail.com'}>`,
    to: recipient,
    replyTo: email || undefined,
    subject,
    text: textContent,
    html: htmlContent
  };

  // 4. Send Email
  try {
    const info = await transporter.sendMail(mailOptions);
    let previewUrl = null;

    if (isTest && testAccount) {
      previewUrl = nodemailer.getTestMessageUrl(info);
    }

    // Log for auditing and verification
    const logEntry = {
      timestamp: new Date().toISOString(),
      recipient,
      formType,
      name,
      phone,
      email,
      messageId: info.messageId,
      isTest,
      previewUrl
    };

    console.log(`[Email Service] Notification sent successfully. MessageId: ${info.messageId} | Recipient: ${recipient}`);
    if (previewUrl) {
      console.log(`[Email Service] Test Preview URL: ${previewUrl}`);
    }

    // Save recent email log locally for audit and verification
    try {
      const logsDir = path.join(process.cwd(), '.system_generated', 'emails');
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      const logFile = path.join(logsDir, 'latest-lead.json');
      fs.writeFileSync(logFile, JSON.stringify({ ...logEntry, payload: normalizedData }, null, 2), 'utf8');
    } catch (logErr) {
      // Non-blocking log failure
    }

    return {
      success: true,
      status: 200,
      message: 'Email notification sent successfully.',
      messageId: info.messageId,
      recipient,
      isTest,
      previewUrl
    };
  } catch (err) {
    console.error('[Email Service Error]', err);
    return {
      success: false,
      status: 500,
      message: 'Failed to deliver email notification. Please try again or reach us on WhatsApp (+91 91739 46161).',
      error: err.message
    };
  }
}
