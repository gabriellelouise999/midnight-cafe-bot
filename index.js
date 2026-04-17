const users = {};
function getUser(id) {
  if (!users[id]) {
    users[id] = { coins: 50 }; // starting money
  }
  return users[id];
}
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
client.on('ready', async () => {
  const commands = [
    {
      name: 'read',
      description: 'Read with your cat companion'
    },
    {
      name: 'focus',
      description: 'Start a cozy focus session'
    },
    {
      name: 'cafe',
      description: 'Enter the midnight café'
    }
  ];

  await client.application.commands.set(commands);
  console.log("✨ Commands registered");
});
const {
  Client,
  GatewayIntentBits,
  Events,
  EmbedBuilder,
} = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

const activeSessions = new Map();

const catMoods = [
  "sleepy",
  "curious",
  "purring",
  "watchful",
  "dreamy",
  "cozy",
];

const catMessages = {
  sleepy: [
    "🐱 your cat has curled into a warm little circle beside your book.",
    "🌙 your cat blinks slowly, then settles into the lamplight.",
  ],
  curious: [
    "🐾 your cat taps the edge of your page, then watches quietly.",
    "📚 your cat sniffs the stack of books and decides to stay.",
  ],
  purring: [
    "💜 a soft purr fills the quiet room.",
    "✨ your cat leans against your arm, purring gently.",
  ],
  watchful: [
    "🌙 your cat sits by the window, keeping watch over the library.",
    "🕯️ your cat watches the room with calm golden eyes.",
  ],
  dreamy: [
    "☁️ your cat seems half-asleep, dreaming under the
// ☕ /cafe shop
if (interaction.commandName === 'shop') {
  await interaction.reply({
    embeds: [{
      title: "☕ Midnight Café Menu",
      description:
        "🌙 Coffee — 10 coins\n🍪 Cookie — 5 coins\n🕯️ Candle — 15 coins",
      color: 0x8e6cf2
    }]
  });
}if (interaction.commandName === 'buy') {
  const item = interaction.options.getString('item');
  const user = getUser(interaction.user.id);

  if (item === 'coffee' && user.coins >= 10) {
    user.coins -= 10;
    await interaction.reply("☕ You sip a warm coffee... the cat purrs beside you 🐱");
  } else if (item === 'cookie' && user.coins >= 5) {
    user.coins -= 5;
    await interaction.reply("🍪 A soft cookie… the cat steals a crumb 😌");
  } else {
    await interaction.reply("🌙 Not enough coins...");
  }
}// 📚 /read → earn coins
if (interaction.commandName === 'read') {
  const user = getUser(interaction.user.id);
  user.coins += 15;

  await interaction.reply(
    "📖 You read quietly...\n🌙 +15 coins\n🐱 The cat curls closer."
  );
}// 🎮 /roll game
if (interaction.commandName === 'roll') {
  const user = getUser(interaction.user.id);
  const roll = Math.floor(Math.random() * 6) + 1;

  if (roll >= 4) {
    user.coins += 10;
    await interaction.reply(`🎲 You rolled ${roll}!\n✨ You win 10 coins`);
  } else {
    await interaction.reply(`🎲 You rolled ${roll}… better luck next time`);
  }
}// 🎮 /roll game
if (interaction.commandName === 'roll') {
  const user = getUser(interaction.user.id);
  const roll = Math.floor(Math.random() * 6) + 1;

  if (roll >= 4) {
    user.coins += 10;
    await interaction.reply(`🎲 You rolled ${roll}!\n✨ You win 10 coins`);
  } else {
    await interaction.reply(`🎲 You rolled ${roll}… better luck next time`);
  }
}if (interaction.commandName === 'balance') {
  const user = getUser(interaction.user.id);
  await interaction.reply(`🌙 You have ${user.coins} coins`);
}if (interaction.commandName === 'music') {
  await interaction.reply(
    "🎧 Cozy music:\nhttps://www.youtube.com/watch?v=5qap5aO4i9A"
  );
}if (interaction.commandName === 'movie') {
  await interaction.reply(
    "🎬 Movie night:\nUse Discord Activities → Watch Together 🍿"
  );
}const moods = [
  "🐱 The cat blinks slowly at you",
  "🐾 It stretches beside your book",
  "🌙 It watches the moon quietly",
  "💤 It dozes off near you"
];

function randomMood() {
  return moods[Math.floor(Math.random() * moods.length)];
}await interaction.reply(`📖 You read...\n${randomMood()}`);
