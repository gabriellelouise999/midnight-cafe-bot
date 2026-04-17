const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`🌙 Logged in as ${client.user.tag}`);
});

client.login(process.env.TOKEN);
const { Client, GatewayIntentBits, Events } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// 🌙 When bot starts
client.once(Events.ClientReady, () => {
  console.log(`🌙 Logged in as ${client.user.tag}`);
});

// 📚 Slash command interaction
client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  // 🐱 /read command
  if (interaction.commandName === 'read') {
    await interaction.reply(
      "🐱 *The little cat curls up beside you...*\n📖 Time to read for a bit. I’ll stay with you."
    );
  }

  // 🌙 /focus command
  if (interaction.commandName === 'focus') {
    await interaction.reply(
      "🌙 *The café quiets down...*\n🕯️ Let's focus for 25 minutes. I’ll keep the space calm."
    );
  }

  // ☕ /cafe command
  if (interaction.commandName === 'cafe') {
    await interaction.reply(
      "☕ *You enter the midnight café...*\n✨ Soft lights, quiet pages, and a cat watching the stars."
    );
  }
});

client.login(process.env.TOKEN);
