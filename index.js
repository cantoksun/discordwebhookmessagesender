require('dotenv').config();
const { Client, GatewayIntentBits, WebhookClient, PermissionsBitField } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const webhook = new WebhookClient({
  id: process.env.WEBHOOK_ID,
  token: process.env.WEBHOOK_TOKEN
});

client.once('ready', () => {
  console.log(`${client.user.tag} olarak giriş yapıldı.`);
});

client.on('messageCreate', async (message) => {
  try {
    if (message.author.bot) return;
    if (!message.content.startsWith('!mesaj')) return;

    const parts = message.content.trim().split(' ').slice(1);
    if (parts.length === 0) return;

    // komuttan hedef kullanıcı ve mesajı ayır
    const targetRef = parts.shift();
    const text = parts.join(' ').trim();
    if (!text) return;

    // kullanıcıyı bul (mention veya id)
    let user = message.mentions.users.first();

    if (!user) {
      const idMatch = targetRef.replace(/\D/g, '');
      if (!idMatch) return;

      const memberCached = message.guild?.members.cache.get(idMatch);
      const member = memberCached ?? await message.guild?.members.fetch(idMatch).catch(() => null);
      user = member?.user ?? null;
    }

    if (!user) {
      console.error('kullanıcı bulunamadı:', targetRef);
      return;
    }

    // mesajı webhook üzerinden gönder
    await webhook.send({
      username: user.username,
      avatarURL: user.displayAvatarURL({ size: 512, extension: 'png' }),
      content: text,
      allowedMentions: { parse: [] } // mention tetiklemesini önler
    });

    // komut mesajını sil
    if (message.guild && message.channel.permissionsFor(client.user)?.has(PermissionsBitField.Flags.ManageMessages)) {
      await message.delete().catch(() => {});
    }

  } catch (err) {
    console.error('webhook gönderim hatası:', err);
  }
});

client.login(process.env.TOKEN);
