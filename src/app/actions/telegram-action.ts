'use server';

export async function sendNotification(
  message: string,
  options: {
    parseMode?: 'HTML' | 'Markdown' | 'MarkdownV2';
    disableWebPagePreview?: boolean;
  } = {},
): Promise<void> {
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

  const payload = {
    chat_id: process.env.TELEGRAM_ADMIN_CHAT_ID,
    text: message,
    parse_mode: options.parseMode,
    disable_web_page_preview: options.disableWebPagePreview ?? true,
  };

  let attempts = 0;
  const maxAttempts = 3;
  const retryDelay = 1000;

  while (attempts < maxAttempts) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!data.ok) {
        throw new Error(`Telegram API error: ${data.description}`);
      }

      return;
    } catch (error) {
      attempts++;
      if (attempts === maxAttempts) {
        throw new Error(
          `Failed to send Telegram notification after ${maxAttempts} attempts: ${error}`,
        );
      }
      await new Promise((resolve) => setTimeout(resolve, retryDelay));
    }
  }
}
