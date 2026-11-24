// Konfigurasi via environment variables.
// Di Vercel, gunakan dashboard project > Settings > Environment Variables.
module.exports = {
  tokens: process.env.TELEGRAM_BOT_TOKEN || "",  // Bot Token Telegram
  owner: process.env.OWNER_ID || "",            // Id owner (opsional)
  port: process.env.PORT || "2804",             // Digunakan Vercel otomatis
  ipvps: process.env.IPVPS || ""                // URL VPS (opsional)
};
