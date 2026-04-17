users[userId] = {
  coins: 50,
  inventory: [],
  catMood: "cozy",
  club: null
};const users = {};

function getUser(id) {
  if (!users[id]) {
    users[id] = {
      coins: 50,
      inventory: [],
      catMood: "cozy"
    };
  }
  return users[id];
}const users = {};
users[userId] = {
  coins: 50,
  character: {
    name: "Gabrielle",
    style: "moonlit reader"
  },
  cat: {
    name: "Miso",
    breed: "ragdoll",
    personality: "sleepy"
  }
};const users = {};

function getUser(id) {
  if (!users[id]) {
    users[id] = {
      coins: 50,
      character: {
        name: null,
        style: null
      },
      cat: {
        name: null,
        breed: null,
        personality: null
      }
    };
  }
  return users[id];
}if (interaction.commandName === 'create-character') {
  const name = interaction.options.getString('name');
  const style = interaction.options.getString('style');

  const user = getUser(interaction.user.id);
  user.character.name = name;
  user.character.style = style;

  await interaction.reply(`✨ Your character has been created.\n**Name:** ${name}\n**Style:** ${style}`);
}if (interaction.commandName === 'create-cat') {
  const name = interaction.options.getString('name');
  const breed = interaction.options.getString('breed');
  const personality = interaction.options.getString('personality');

  const user = getUser(interaction.user.id);
  user.cat.name = name;
  user.cat.breed = breed;
  user.cat.personality = personality;

  await interaction.reply(`🐱 Your cat has been created.\n**Name:** ${name}\n**Breed:** ${breed}\n**Personality:** ${personality}`);
}if (interaction.commandName === 'profile') {
  const user = getUser(interaction.user.id);

  const embed = new EmbedBuilder()
    .setColor(0x8e6cf2)
    .setTitle("🌙 your profile")
    .setDescription(
      `**name:** ${user.character.name || 'not set'}\n` +
      `**style:** ${user.character.style || 'not set'}\n` +
      `**coins:** ${user.coins}\n\n` +
      `🐱 **cat:** ${user.cat.name || 'not set'}\n` +
      `**breed:** ${user.cat.breed || 'not set'}\n` +
      `**personality:** ${user.cat.personality || 'not set'}`
    )
    .setFooter({ text: "gabrielle’s midnight café ✦ cozy profile" });

  await interaction.reply({ embeds: [embed] });
}
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
const { EmbedBuilder } = require('discord.js');

function makeEmbed(title, description) {
  return new EmbedBuilder()
    .setColor(0x8e6cf2)
    .setTitle(title)
    .setDescription(description)
    .setFooter({ text: "gabrielle’s midnight café ✦ cozy library mode" })
    .setTimestamp();
}if (interaction.commandName === 'read') {
  const embed = makeEmbed(
    "📚 moonlit library",
    "🐱 your reading buddy curls beside the lamp.\n\nYou open your book and settle into a quiet chair.\nThe room is warm, the window is glowing, and the library feels still."
  );

  embed.setImage("YOUR_LIBRARY_IMAGE_URL_HERE");

  await interaction.reply({ embeds: [embed] });
}const rooms = {
  library: {
    name: "moonlit library",
    image: "https://your-image-url/library.png"
  },
  cafe: {
    name: "midnight café",
    image: "https://your-image-url/cafe.png"
  },
  attic: {
    name: "rainy attic",
    image: "https://your-image-url/attic.png"
  }
};const room = rooms.library;
const embed = makeEmbed(
  `📖 ${room.name}`,
  "Soft lamp light falls across the pages. Your cat watches the moon."
);
embed.setImage(room.image);const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const row = new ActionRowBuilder().addComponents(
  new ButtonBuilder()
    .setCustomId('buy_coffee')
    .setLabel('☕ buy coffee')
    .setStyle(ButtonStyle.Secondary),

  new ButtonBuilder()
    .setCustomId('buy_cookie')
    .setLabel('🍪 buy cookie')
    .setStyle(ButtonStyle.Secondary),

  new ButtonBuilder()
    .setCustomId('check_cat')
    .setLabel('🐱 check cat')
    .setStyle(ButtonStyle.Primary)
);await interaction.reply({
  embeds: [embed],
  components: [row]
});const coins = 125;
const focusBar = "▰▰▰▱▱";

const embed = makeEmbed(
  "🐱 reading session",
  `🌙 **coins:** ${coins}\n📖 **focus:** ${focusBar}\n\nYour cat purrs quietly beside your book.`
);const catMoods = {
  sleepy: {
    text: "💤 your cat is tucked into a warm little circle.",
    image: "https://your-image-url/cat_sleepy.png"
  },
  playful: {
    text: "🐾 your cat bats at the edge of your bookmark.",
    image: "https://your-image-url/cat_playful.png"
  }
};const embed = makeEmbed(
  "☕ midnight café menu",
  "Choose something warm and cozy.\n\n☕ **coffee** — 10 coins\n🍪 **cookie** — 5 coins\n🕯️ **candle** — 15 coins"
);
embed.setImage("YOUR_CAFE_MENU_IMAGE_URL");const embed = makeEmbed(
  "🕯️ focus session started",
  "📚 **room:** moonlit library\n⏳ **time:** 25 minutes\n🐱 **cat mood:** cozy\n\nThe room quiets. Your cat settles beside the lamp."
);const halfway = makeEmbed(
  "🌙 halfway there",
  "The pages keep turning. Your cat blinks slowly and stays close."
);const done = makeEmbed(
  "✨ session complete",
  "You finished your reading session.\n🌙 +15 coins\n🐱 your cat purrs proudly."
);const rooms = {
  library: {
    name: "moonlit library",
    image: "https://i.imgur.com/yourLibraryImage.png"
  },
  cafe: {
    name: "midnight café",
    image: "https://i.imgur.com/yourCafeImage.png"
  },
  attic: {
    name: "rainy attic",
    image: "https://i.imgur.com/yourAtticImage.png"
  }
};const { EmbedBuilder } = require('discord.js');

if (interaction.commandName === 'shop') {
  const embed = new EmbedBuilder()
    .setColor(0x8e6cf2)
    .setTitle("☕ midnight café")
    .setDescription(
      "A quiet space, warm light, and something soft to hold.\n\n" +
      "☕ **coffee** — 10 coins\n" +
      "🍪 **cookie** — 5 coins\n" +
      "🍷 **evening wine** — 15 coins\n" +
      "🌿 **herbal tea** — 12 coins\n" +
      "🕯️ **candle** — 15 coins\n\n" +
      "*your cat watches from the windowsill* 🐱"
    )
    .setFooter({ text: "gabrielle’s midnight café ✦ soft night menu" })
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}
if (item === 'coffee' && user.coins >= 10) {
  user.coins -= 10;
  await interaction.reply(
    "☕ You wrap your hands around a warm cup.\n🌙 The café quiets… your cat settles beside you."
  );
}

if (item === 'cookie' && user.coins >= 5) {
  user.coins -= 5;
  await interaction.reply(
    "🍪 A soft, warm cookie.\n🐱 Your cat watches closely… waiting for crumbs."
  );
}

if (item === 'wine' && user.coins >= 15) {
  user.coins -= 15;
  await interaction.reply(
    "🍷 A quiet evening drink.\n🕯️ The light softens, and the night feels slower."
  );
}

if (item === 'tea' && user.coins >= 12) {
  user.coins -= 12;
  await interaction.reply(
    "🌿 A calming herbal tea.\n☁️ The air feels lighter, and your thoughts slow gently."
  );
}

if (item === 'candle' && user.coins >= 15) {
  user.coins -= 15;
  await interaction.reply(
    "🕯️ You light a small candle.\n✨ The room glows warmer… your cat curls closer."
  );
}embed.setImage("https://i.imgur.com/YOUR_CAFE_IMAGE.png");
const books = {
  moonlit_poems: {
    title: "Moonlit Poems",
    author: "Library Collection",
    genre: "poetry",
    pages: [
      "Page 1 text here...",
      "Page 2 text here...",
      "Page 3 text here..."
    ],
    cover: "https://your-image-url/poem-cover.png"
  }
};{
  title: "Moonlit Poems",
  pages: ["...", "..."],
  audioPages: [
    "audio/page1.mp3",
    "audio/page2.mp3"
  ]
}client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isButton()) return;

  const user = getUser(interaction.user.id);

  if (interaction.customId === 'buy_coffee') {
    if (user.coins < 10) {
      await interaction.reply({ content: "🌙 Not enough coins for coffee.", ephemeral: true });
      return;
    }
    user.coins -= 10;
    user.inventory.push("coffee");
    await interaction.reply("☕ Coffee added to your inventory.");
  }

  if (interaction.customId === 'buy_cookie') {
    if (user.coins < 5) {
      await interaction.reply({ content: "🌙 Not enough coins for a cookie.", ephemeral: true });
      return;
    }
    user.coins -= 5;
    user.inventory.push("cookie");
    await interaction.reply("🍪 Cookie added to your inventory.");
  }

  if (interaction.customId === 'buy_wine') {
    if (user.coins < 15) {
      await interaction.reply({ content: "🌙 Not enough coins for evening wine.", ephemeral: true });
      return;
    }
    user.coins -= 15;
    user.inventory.push("wine");
    await interaction.reply("🍷 Evening wine added to your inventory.");
  }

  if (interaction.customId === 'buy_tea') {
    if (user.coins < 12) {
      await interaction.reply({ content: "🌙 Not enough coins for herbal tea.", ephemeral: true });
      return;
    }
    user.coins -= 12;
    user.inventory.push("tea");
    await interaction.reply("🌿 Herbal tea added to your inventory.");
  }

  if (interaction.customId === 'buy_candle') {
    if (user.coins < 15) {
      await interaction.reply({ content: "🌙 Not enough coins for a candle.", ephemeral: true });
      return;
    }
    user.coins -= 15;
    user.inventory.push("candle");
    await interaction.reply("🕯️ Candle added to your inventory.");
  }
});if (interaction.commandName === 'inventory') {
  const user = getUser(interaction.user.id);
  const items = user.inventory.length ? user.inventory.map(item => `• ${item}`).join('\n') : "empty";

  const embed = new EmbedBuilder()
    .setColor(0x8e6cf2)
    .setTitle("👜 inventory")
    .setDescription(`🌙 **coins:** ${user.coins}\n\n${items}`)
    .setFooter({ text: "gabrielle’s midnight café ✦ inventory" });

  await interaction.reply({ embeds: [embed] });
}const catReactions = {
  coffee: {
    mood: "alert",
    text: "🐱 Your cat perks up and watches the steam curl into the air."
  },
  cookie: {
    mood: "playful",
    text: "🐾 Your cat watches closely, hoping for crumbs."
  },
  wine: {
    mood: "sleepy",
    text: "🌙 The room softens, and your cat settles into the lamplight."
  },
  tea: {
    mood: "calm",
    text: "☁️ Your cat blinks slowly and curls closer."
  },
  candle: {
    mood: "cozy",
    text: "🕯️ The warm glow makes your cat purr softly."
  }
};if (interaction.commandName === 'use') {
  const item = interaction.options.getString('item');
  const user = getUser(interaction.user.id);

  const index = user.inventory.indexOf(item);
  if (index === -1) {
    await interaction.reply("🌙 You don’t have that item.");
    return;
  }

  user.inventory.splice(index, 1);

  const reaction = catReactions[item];
  if (reaction) {
    user.catMood = reaction.mood;
    await interaction.reply(`${reaction.text}\n✨ **${item}** used.`);
  } else {
    await interaction.reply(`You used **${item}**.`);
  }
}if (interaction.commandName === 'cat') {
  const user = getUser(interaction.user.id);

  const embed = new EmbedBuilder()
    .setColor(0x8e6cf2)
    .setTitle("🐱 your cat")
    .setDescription(`Current mood: **${user.catMood}**`)
    .setFooter({ text: "gabrielle’s midnight café ✦ cat companion" });

  await interaction.reply({ embeds: [embed] });
}if (interaction.commandName === 'music') {
  const embed = new EmbedBuilder()
    .setColor(0x8e6cf2)
    .setTitle("🎧 listening room")
    .setDescription("Choose the sound that fits the night.");

  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setLabel("🌧️ rain")
      .setStyle(ButtonStyle.Link)
      .setURL("https://www.youtube.com/watch?v=mPZkdNFkNps"),
    new ButtonBuilder()
      .setLabel("☕ café jazz")
      .setStyle(ButtonStyle.Link)
      .setURL("https://www.youtube.com/watch?v=Dx5qFachd3A"),
    new ButtonBuilder()
      .setLabel("🎧 lofi")
      .setStyle(ButtonStyle.Link)
      .setURL("https://www.youtube.com/watch?v=jfKfPfyJRdk"),
    new ButtonBuilder()
      .setLabel("🔥 fireplace")
      .setStyle(ButtonStyle.Link)
      .setURL("https://www.youtube.com/watch?v=L_LUpnjgPso")
  );

  await interaction.reply({ embeds: [embed], components: [row] });
}[
  { name: 'shop', description: 'Open the midnight café menu' },
  { name: 'inventory', description: 'View your inventory' },
  {
    name: 'use',
    description: 'Use an item from your inventory',
    options: [
      {
        name: 'item',
        description: 'The item to use',
        type: 3,
        required: true
      }
    ]
  },
  { name: 'cat', description: 'Check on your cat companion' },
  { name: 'music', description: 'Open the listening room' }
]const rooms = {
  library: {
    name: "moonlit library",
    description: "Tall shelves, warm lamplight, and a quiet cat by the books.",
    image: "YOUR_LIBRARY_IMAGE_URL",
    unlockCost: 0
  },
  bay_window: {
    name: "bay window nook",
    description: "A cushioned window seat, moonlight on the glass, and rain beyond the panes.",
    image: "YOUR_BAY_WINDOW_IMAGE_URL",
    unlockCost: 80
  },
  treehouse: {
    name: "treehouse reading nook",
    description: "Wooden shelves, hanging lights, soft wind through the leaves, and a hidden little world above the ground.",
    image: "YOUR_TREEHOUSE_IMAGE_URL",
    unlockCost: 150
  },
  fireplace: {
    name: "fireplace corner",
    description: "A deep chair, a crackling fire, and blankets gathered in warm folds.",
    image: "YOUR_FIREPLACE_IMAGE_URL",
    unlockCost: 120
  }
};const decorItems = {
  blanket: {
    name: "soft blanket",
    price: 20,
    description: "Adds warmth and comfort to your reading space."
  },
  pillow: {
    name: "plush pillow",
    price: 15,
    description: "Makes every corner feel softer."
  },
  lavender_pillow: {
    name: "lavender pillow",
    price: 25,
    description: "A calming little comfort for late-night reading."
  },
  knitted_throw: {
    name: "knitted throw",
    price: 30,
    description: "A cozy layer for rainy evenings."
  }
};const embed = new EmbedBuilder()
  .setColor(0x8e6cf2)
  .setTitle("🪟 bay window nook")
  .setDescription(
    "Moonlight spills across the cushions.\n\n" +
    "🕯️ a lamp glows softly\n" +
    "🛋️ a blanket is draped across the seat\n" +
    "🐱 your cat watches the night outside"
  )
  .setImage(rooms.bay_window.image)
  .setFooter({ text: "gabrielle’s midnight café ✦ reading nook" });
const embed = new EmbedBuilder()
  .setColor(0x8e6cf2)
  .setTitle("🌙 available clubs")
  .setDescription(
    "Find your place in the library.\n\n" +
    "📖 **moonlit readers** — cozy reading sessions\n" +
    "📜 **poetry circle** — quiet words and soft thoughts\n" +
    "📸 **photography club** — capture the night\n" +
    "🌙 **night owls** — late-night energy\n\n" +
    "*your cat watches quietly… waiting for your choice* 🐱"
  );if (interaction.commandName === 'join') {
  const club = interaction.options.getString('club');
  const user = getUser(interaction.user.id);

  user.club = club;

  await interaction.reply(
    `✨ You joined **${club}**.\n🐱 Your cat seems curious about your new circle.`
  );
}if (user.club === "moonlit readers") {
  user.coins += 5; // bonus
}const hour = new Date().getHours();
if (user.club === "night owls" && (hour >= 22 || hour <= 4)) {
  user.coins += 10;
}const rooms = {
  library: {
    name: "enchanted library",
    description: "Books grow from the roots of ancient trees. Soft lights flicker like fireflies.",
    image: "FOREST_LIBRARY_IMAGE"
  },
  bay_window: {
    name: "mossy window nook",
    description: "A curved window wrapped in vines, with cushions and moonlight pooling on the floor.",
    image: "FOREST_WINDOW_IMAGE"
  },
  treehouse: {
    name: "treehouse reading nook",
    description: "Hidden among branches, with hanging lanterns and whispering leaves.",
    image: "TREEHOUSE_IMAGE"
  }
};user.room = {
  type: "private",
  name: "your study nook",
  decor: []
};if (interaction.commandName === 'studyroom') {
  const user = getUser(interaction.user.id);

  const embed = new EmbedBuilder()
    .setColor(0x8e6cf2)
    .setTitle("🔒 your private study nook")
    .setDescription(
      "A quiet, hidden space just for you.\n\n" +
      "🧺 blankets: " + user.room.decor.join(", ") + "\n" +
      "🐱 your cat rests beside you"
    )
    .setFooter({ text: "forest library ✦ private space" });

  await interaction.reply({ embeds: [embed], ephemeral: true });
}🍫 hot chocolate — 12 coinsuser.inventory.push("hot_chocolate");
hot_chocolate: {
  mood: "cozy",
  text: "🍫 Warm and sweet… your cat curls closer as the night softens."
}const books = {
  poe: {
    title: "Selected Poems",
    author: "Edgar Allan Poe",
    pages: [
      "Once upon a midnight dreary...",
      "While I pondered, weak and weary..."
    ]
  },
  dickinson: {
    title: "Poems",
    author: "Emily Dickinson",
    pages: [
      "Because I could not stop for Death...",
      "He kindly stopped for me..."
    ]
  }
};if (interaction.commandName === 'readbook') {
  const book = books.poe;

  const embed = new EmbedBuilder()
    .setColor(0x8e6cf2)
    .setTitle(`📖 ${book.title}`)
    .setDescription(book.pages[0])
    .setFooter({ text: "page 1" });

  await interaction.reply({ embeds: [embed] });
}"🐱 Miso settles beside the glowing mushrooms as you read."
"🌿 Your cat watches the fireflies drift between the pages."
