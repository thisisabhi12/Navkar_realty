/**
 * Navkar Realty API Client
 * Handles submission of leads, site visit bookings, property inquiries, and consultations.
 */

export async function submitInquiry(payload) {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';

  const enrichedPayload = {
    ...payload,
    pageUrl: payload.pageUrl || currentUrl,
    userAgent,
    submittedAt: payload.submittedAt || new Date().toISOString(),
  };

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enrichedPayload),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const errorMessage = data.message || `Server responded with status ${response.status}`;
      return {
        success: false,
        message: errorMessage,
        errors: data.errors || [errorMessage],
      };
    }

    return {
      success: true,
      message: data.message || 'Your inquiry has been received successfully.',
      messageId: data.messageId,
      previewUrl: data.previewUrl,
    };
  } catch (error) {
    console.error('[API Network Error]', error);
    return {
      success: false,
      message: 'Unable to connect to the notification service. Please check your network or reach us directly on WhatsApp (+91 91739 46161).',
      errors: [error.message],
    };
  }
}
