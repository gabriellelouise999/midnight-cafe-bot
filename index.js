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
"🍫 **hot chocolate** — 12 coins\n"
if (interaction.customId === 'buy_hot_chocolate') {
  if (user.coins < 12) {
    await interaction.reply({ content: "🌙 Not enough coins for hot chocolate.", ephemeral: true });
    return;
  }

  user.coins -= 12;
  user.inventory.push("hot_chocolate");
  await interaction.reply("🍫 Hot chocolate added to your inventory.");
}
hot_chocolate: {
  mood: "cozy",
  text: "🍫 Warm and sweet… your cat curls closer as the night softens."
}
new ButtonBuilder()
  .setCustomId('buy_hot_chocolate')
  .setLabel('🍫 hot chocolate')
  .setStyle(ButtonStyle.Secondary)
function getUser(id) {
  if (!users[id]) {
    users[id] = {
      coins: 50,
      inventory: [],
      catMood: "cozy",
      room: {
        type: "private",
        name: "your study nook",
        decor: []
      }
    };
  }
  return users[id];
}if (interaction.commandName === 'studyroom') {
  const user = getUser(interaction.user.id);

  const decorText = user.room.decor.length
    ? user.room.decor.map(item => `• ${item}`).join('\n')
    : "• soft lamplight\n• a quiet chair\n• your cat nearby";

  const embed = new EmbedBuilder()
    .setColor(0x8e6cf2)
    .setTitle("🔒 your private study nook")
    .setDescription(
      "A hidden little room just for you.\n\n" +
      "🌿 vines curl around the shelves\n" +
      "✨ fireflies drift near the window\n" +
      "🐱 your cat rests beside your books\n\n" +
      `**decor**\n${decorText}`
    )
    .setFooter({ text: "enchanted library ✦ private space" });

  await interaction.reply({ embeds: [embed], ephemeral: true });
}
const books = {
  dickinson_hope: {
    title: '"Hope" is the thing with feathers',
    author: 'Emily Dickinson',
    pages: [
      `"Hope" is the thing with feathers -\nThat perches in the soul -\nAnd sings the tune without the words -\nAnd never stops - at all -`,
      `And sweetest - in the Gale - is heard -\nAnd sore must be the storm -\nThat could abash the little Bird\nThat kept so many warm -`,
      `I've heard it in the chillest land -\nAnd on the strangest Sea -\nYet - never - in Extremity,\nIt asked a crumb - of me.`
    ]
  }
};
if (interaction.commandName === 'readbook') {
  const book = books.dickinson_hope;

  const embed = new EmbedBuilder()
    .setColor(0x8e6cf2)
    .setTitle(`📖 ${book.title}`)
    .setDescription(book.pages[0])
    .setFooter({ text: `${book.author} ✦ page 1 of ${book.pages.length}` });

  await interaction.reply({ embeds: [embed] });
}
const rooms = {
  library: {
    name: "enchanted library",
    description: "Books rest in carved wooden shelves beneath twisted branches. Fireflies glow softly between the stacks.",
    image: "FOREST_LIBRARY_IMAGE"
  },
  cafe: {
    name: "forest café",
    description: "A warm little café hidden among trees, with lantern light, tea steam, and moss beneath the windows.",
    image: "FOREST_CAFE_IMAGE"
  },
  attic: {
    name: "rainy canopy loft",
    description: "A tucked-away loft above the forest, where rain taps softly on the glass and ivy trails along the beams.",
    image: "FOREST_ATTIC_IMAGE"
  },
  bay_window: {
    name: "mossy window nook",
    description: "A curved window wrapped in ivy, layered with blankets and pillows, where moonlight pools across the cushions.",
    image: "FOREST_WINDOW_IMAGE"
  },
  treehouse: {
    name: "treehouse reading nook",
    description: "A hidden room in the branches, lit by lanterns and drifting pollen-light, with shelves built into old wood.",
    image: "TREEHOUSE_IMAGE"
  }
};
[
  { name: 'studyroom', description: 'View your private study room' },
  { name: 'readbook', description: 'Read a book from the library' }
]
const decorItems = {
  blanket: {
    name: "soft blanket",
    price: 20,
    description: "A warm, soft layer for quiet reading."
  },
  pillow: {
    name: "plush pillow",
    price: 15,
    description: "Makes every nook softer."
  },
  lavender_pillow: {
    name: "lavender pillow",
    price: 25,
    description: "A calming little comfort for late-night reading."
  }
};player: {
  name: "Gabrielle",
  style: "moonlit reader",
  level: 1,
  xp: 0,
  coins: 50,
  club: null,
  currentRoom: "library",
  unlockedRooms: ["library"]
}cat: {
  name: "Miso",
  breed: "ragdoll",
  coat: "cream",
  personality: "sleepy",
  mood: "cozy",
  friendship: 0,
  accessories: []
}rooms: {
  library: {
    name: "enchanted library",
    description: "Books rest beneath twisted branches and drifting fireflies.",
    image: "library_image_url",
    unlockCost: 0
  }
}books: {
  dickinson_hope: {
    title: '"Hope" is the thing with feathers',
    author: 'Emily Dickinson',
    genre: 'poetry',
    cover: 'cover_url',
    pages: [
      'Page 1...',
      'Page 2...',
      'Page 3...'
    ]
  }
}{
  player: {
    name: "",
    style: "",
    level: 1,
    xp: 0,
    coins: 50,
    club: null,
    currentRoom: "library",
    unlockedRooms: ["library"]
  },
  cat: {
    name: "",
    breed: "",
    coat: "",
    personality: "",
    mood: "cozy",
    friendship: 0,
    accessories: []
  },
  inventory: {
    cafeItems: [],
    decor: [],
    playerAccessories: [],
    catAccessories: [],
    books: []
  },
  room: {
    decorPlaced: []
  },
  progress: {
    streak: 0,
    booksRead: [],
    questsCompleted: [],
    unlockedWorlds: []
  }
}player: {
  name: "Gabrielle",
  style: "moonlit reader",
  level: 1,
  xp: 0,
  coins: 50,
  club: null,
  currentRoom: "library",
  unlockedRooms: ["library"]
}cat: {
  name: "Miso",
  breed: "ragdoll",
  coat: "cream",
  personality: "sleepy",
  mood: "cozy",
  friendship: 0,
  accessories: []
}rooms: {
  library: {
    name: "enchanted library",
    description: "Books rest beneath twisted branches and drifting fireflies.",
    image: "library_image_url",
    unlockCost: 0
  }
}books: {
  dickinson_hope: {
    title: '"Hope" is the thing with feathers',
    author: 'Emily Dickinson',
    genre: 'poetry',
    cover: 'cover_url',
    pages: [
      'Page 1...',
      'Page 2...',
      'Page 3...'
    ]
  }
}{
  player: {
    name: "",
    style: "",
    level: 1,
    xp: 0,
    coins: 50,
    club: null,
    currentRoom: "library",
    unlockedRooms: ["library"]
  },
  cat: {
    name: "",
    breed: "",
    coat: "",
    personality: "",
    mood: "cozy",
    friendship: 0,
    accessories: []
  },
  inventory: {
    cafeItems: [],
    decor: [],
    playerAccessories: [],
    catAccessories: [],
    books: []
  },
  room: {
    decorPlaced: []
  },
  progress: {
    streak: 0,
    booksRead: [],
    questsCompleted: [],
    unlockedWorlds: []
  }
}learning: {
  psychology: 0,
  history: 0,
  philosophy: 0,
  english: 0,
  french: 0
}const embed = new EmbedBuilder()
  .setColor(0x8e6cf2)
  .setTitle("🌿 learning wing")
  .setDescription(
    "Quiet paths lead to different forms of knowledge.\n\n" +
    "🧠 psychology\n" +
    "🏛️ history\n" +
    "🕯️ philosophy\n" +
    "📖 literature\n" +
    "🇫🇷 french\n\n" +
    "*your cat follows quietly beside you* 🐱"
  );
const users = {};

function getUser(id) {
  if (!users[id]) {
    users[id] = {
      player: {
        name: null,
        style: null,
        level: 1,
        xp: 0,
        coins: 50,
        currentRoom: "library"
      },
      cat: {
        name: null,
        breed: null,
        personality: null,
        mood: "cozy"
      },
      inventory: [],
      room: {
        name: "private study nook",
        decor: []
      }
    };
  }
  return users[id];
}function addXP(user, amount) {
  user.player.xp += amount;

  while (user.player.xp >= user.player.level * 100) {
    user.player.xp -= user.player.level * 100;
    user.player.level += 1;
    user.player.coins += 25;
  }
}const shopItems = {
  coffee: { name: "coffee", price: 10, type: "cafe" },
  cookie: { name: "cookie", price: 5, type: "cafe" },
  wine: { name: "evening wine", price: 15, type: "cafe" },
  tea: { name: "herbal tea", price: 12, type: "cafe" },
  hot_chocolate: { name: "hot chocolate", price: 12, type: "cafe" },
  candle: { name: "candle", price: 15, type: "decor" },
  blanket: { name: "blanket", price: 20, type: "decor" },
  pillow: { name: "pillow", price: 15, type: "decor" }
};const rooms = {
  library: {
    name: "enchanted library",
    description: "Books rest beneath twisted branches and drifting fireflies."
  },
  studyroom: {
    name: "private study nook",
    description: "A hidden little corner with soft lamplight, pillows, and your cat nearby."
  }
};study: {
  subjects: {
    psychology: 0,
    history: 0,
    philosophy: 0,
    english: 0,
    french: 0
  },
  group: null
}const users = {};

function getUser(id) {
  if (!users[id]) {
    users[id] = {
      player: {
        name: null,
        style: null,
        level: 1,
        xp: 0,
        coins: 50,
        currentRoom: "library"
      },
      cat: {
        name: null,
        breed: null,
        personality: null,
        mood: "cozy"
      },
      inventory: [],
      room: {
        name: "private study nook",
        decor: [],
        profileDisplay: {
          interests: [],
          authors: [],
          books: [],
          movies: [],
          music: [],
          subjects: []
        }
      }
    };
  }
  return users[id];
}if (interaction.commandName === 'setnook') {
  const category = interaction.options.getString('category');
  const value = interaction.options.getString('value');

  const user = getUser(interaction.user.id);

  if (!user.room.profileDisplay[category]) {
    await interaction.reply({ content: "That category doesn’t exist.", ephemeral: true });
    return;
  }

  user.room.profileDisplay[category] = value
    .split(',')
    .map(v => v.trim())
    .filter(Boolean);

  await interaction.reply({
    content: `✨ Your study nook now displays your **${category}**.`,
    ephemeral: true
  });
}if (interaction.commandName === 'studyroom') {
  const user = getUser(interaction.user.id);

  const decorText = user.room.decor.length
    ? user.room.decor.map(item => `• ${item}`).join('\n')
    : "• soft lamplight\n• a quiet chair\n• your cat nearby";

  const display = user.room.profileDisplay;

  const formatList = (arr, fallback = "not set") =>
    arr.length ? arr.join(", ") : fallback;

  const embed = new EmbedBuilder()
    .setColor(0x8e6cf2)
    .setTitle("🔒 your private study nook")
    .setDescription(
      "A hidden little room just for you.\n\n" +
      "🌿 vines curl around the shelves\n" +
      "✨ fireflies drift near the window\n" +
      "🐱 your cat rests beside your books\n\n" +
      `**decor**\n${decorText}\n\n` +
      `**interests**\n${formatList(display.interests)}\n\n` +
      `**favourite authors**\n${formatList(display.authors)}\n\n` +
      `**favourite books**\n${formatList(display.books)}\n\n` +
      `**favourite films / shows**\n${formatList(display.movies)}\n\n` +
      `**favourite music**\n${formatList(display.music)}\n\n` +
      `**favourite subjects**\n${formatList(display.subjects)}`
    )
    .setFooter({ text: "enchanted library ✦ private space" });

  await interaction.reply({ embeds: [embed], ephemeral: true });
}
{
  name: 'setnook',
  description: 'Set what your private study nook displays',
  options: [
    {
      name: 'category',
      description: 'Which part of your nook profile to update',
      type: 3,
      required: true,
      choices: [
        { name: 'interests', value: 'interests' },
        { name: 'favourite authors', value: 'authors' },
        { name: 'favourite books', value: 'books' },
        { name: 'favourite films / shows', value: 'movies' },
        { name: 'favourite music', value: 'music' },
        { name: 'favourite subjects', value: 'subjects' }
      ]
    },
    {
      name: 'value',
      description: 'Comma-separated list',
      type: 3,
      required: true
    }
  ]
}
const rooms = {
  hammock: {
    name: "forest hammock nook",
    description: "A woven hammock hangs between old trees, with lantern light, drifting fireflies, and a soft blanket tucked at your side.",
    image: "HAMMOCK_IMAGE_URL",
    unlockCost: 100
  }
};
reminders: {
  reading: true,
  study: true,
  time: "20:00"
}common_room: {
  name: "lantern common room",
  description: "A warm shared space with low chairs, tea on the tables, and quiet conversations beneath hanging lanterns."
}law: {
  name: "lantern court",
  description: "Tall arched shelves hold old legal volumes, while gold-lit lanterns flicker above polished wood and quiet debate.",
  image: "LAW_ROOM_IMAGE_URL"
}
player: {
  name: "",
  style: "",
  level: 1,
  xp: 0,
  coins: 50,
  currentRoom: "library",
  unlockedRooms: ["library", "studyroom"]
}
cat: {
  name: "",
  breed: "",
  personality: "",
  mood: "cozy",
  friendship: 0
}
shopItems: {
  coffee: { name: "coffee", price: 10, type: "cafe" },
  cookie: { name: "cookie", price: 5, type: "cafe" },
  wine: { name: "evening wine", price: 15, type: "cafe" },
  tea: { name: "herbal tea", price: 12, type: "cafe" },
  hot_chocolate: { name: "hot chocolate", price: 12, type: "cafe" },
  candle: { name: "candle", price: 15, type: "decor" },
  blanket: { name: "blanket", price: 20, type: "decor" },
  pillow: { name: "pillow", price: 15, type: "decor" }
}
inventory: {
  items: [],
  decorPlaced: []
}
room: {
  name: "private study nook",
  decor: [],
  profileDisplay: {
    interests: [],
    authors: [],
    books: [],
    movies: [],
    music: [],
    subjects: []
  }
}
hammock: {
  name: "forest hammock nook",
  description: "A woven hammock hangs between old trees, with lantern light and fireflies drifting through the branches.",
  unlockCost: 100
}
common_room: {
  name: "lantern common room",
  description: "A warm shared space with tea on the tables, low chairs, and soft conversations beneath hanging lanterns."
}
law: {
  name: "lantern court",
  description: "Tall shelves of legal volumes rise beneath flickering lanterns, with polished desks and old casebooks waiting to be opened."
}
reminders: {
  reading: true,
  study: true,
  time: "20:00"
}
{
  player: {
    name: "",
    style: "",
    level: 1,
    xp: 0,
    coins: 50,
    currentRoom: "library",
    unlockedRooms: ["library", "studyroom"]
  },
  cat: {
    name: "",
    breed: "",
    personality: "",
    mood: "cozy",
    friendship: 0
  },
  inventory: {
    items: [],
    decorPlaced: []
  },
  room: {
    name: "private study nook",
    decor: [],
    profileDisplay: {
      interests: [],
      authors: [],
      books: [],
      movies: [],
      music: [],
      subjects: []
    }
  },
  reminders: {
    reading: true,
    study: true,
    time: "20:00"
  },
  progress: {
    questsCompleted: [],
    fairyVisits: 0
  }
}
player: {
  name: "",
  style: "",
  level: 1,
  xp: 0,
  coins: 50,
  currentRoom: "library",
  unlockedRooms: ["library", "studyroom"]
}
cat: {
  name: "",
  breed: "",
  personality: "",
  mood: "cozy",
  friendship: 0
}
shopItems: {
  coffee: { name: "coffee", price: 10, type: "cafe" },
  cookie: { name: "cookie", price: 5, type: "cafe" },
  wine: { name: "evening wine", price: 15, type: "cafe" },
  tea: { name: "herbal tea", price: 12, type: "cafe" },
  hot_chocolate: { name: "hot chocolate", price: 12, type: "cafe" },
  candle: { name: "candle", price: 15, type: "decor" },
  blanket: { name: "blanket", price: 20, type: "decor" },
  pillow: { name: "pillow", price: 15, type: "decor" }
}
inventory: {
  items: [],
  decorPlaced: []
}
room: {
  name: "private study nook",
  decor: [],
  profileDisplay: {
    interests: [],
    authors: [],
    books: [],
    movies: [],
    music: [],
    subjects: []
  }
}
hammock: {
  name: "forest hammock nook",
  description: "A woven hammock hangs between old trees, with lantern light and fireflies drifting through the branches.",
  unlockCost: 100
}
common_room: {
  name: "lantern common room",
  description: "A warm shared space with tea on the tables, low chairs, and soft conversations beneath hanging lanterns."
}
law: {
  name: "lantern court",
  description: "Tall shelves of legal volumes rise beneath flickering lanterns, with polished desks and old casebooks waiting to be opened."
}
reminders: {
  reading: true,
  study: true,
  time: "20:00"
}
{
  player: {
    name: "",
    style: "",
    level: 1,
    xp: 0,
    coins: 50,
    currentRoom: "library",
    unlockedRooms: ["library", "studyroom"]
  },
  cat: {
    name: "",
    breed: "",
    personality: "",
    mood: "cozy",
    friendship: 0
  },
  inventory: {
    items: [],
    decorPlaced: []
  },
  room: {
    name: "private study nook",
    decor: [],
    profileDisplay: {
      interests: [],
      authors: [],
      books: [],
      movies: [],
      music: [],
      subjects: []
    }
  },
  reminders: {
    reading: true,
    study: true,
    time: "20:00"
  },
  progress: {
    questsCompleted: [],
    fairyVisits: 0
  }
}
const {
  Client,
  GatewayIntentBits,
  Events,
  EmbedBuilder,
} = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

const users = {};

const shopItems = {
  coffee: { name: "coffee", price: 10, type: "cafe" },
  cookie: { name: "cookie", price: 5, type: "cafe" },
  wine: { name: "evening wine", price: 15, type: "cafe" },
  tea: { name: "herbal tea", price: 12, type: "cafe" },
  hot_chocolate: { name: "hot chocolate", price: 12, type: "cafe" },
  candle: { name: "candle", price: 15, type: "decor" },
  blanket: { name: "blanket", price: 20, type: "decor" },
  pillow: { name: "pillow", price: 15, type: "decor" },
};

const rooms = {
  library: {
    name: "enchanted library",
    description:
      "Books rest beneath twisted branches and drifting fireflies. The shelves glow softly in the moonlight.",
  },
  studyroom: {
    name: "private study nook",
    description:
      "A hidden little room with soft lamplight, pillows, blankets, and your cat nearby.",
  },
  hammock: {
    name: "forest hammock nook",
    description:
      "A woven hammock hangs between old trees, with lantern light and fireflies drifting through the branches.",
  },
  common_room: {
    name: "lantern common room",
    description:
      "A warm shared space with tea on the tables, low chairs, and soft conversation beneath hanging lanterns.",
  },
  law: {
    name: "lantern court",
    description:
      "Tall shelves of legal volumes rise beneath flickering lanterns, with polished desks and old casebooks waiting to be opened.",
  },
};

const fairyMessages = [
  "✨ a fairy settles on the edge of your bookshelf for a moment, then disappears into the lamplight.",
  "🧚 a little glow drifts past and leaves a silver bookmark behind.",
  "🌙 the fairies seem pleased with tonight’s reading.",
  "✨ a soft shimmer gathers near your window, like tiny wings in the dark.",
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function makeEmbed(title, description) {
  return new EmbedBuilder()
    .setColor(0x8e6cf2)
    .setTitle(title)
    .setDescription(description)
    .setFooter({ text: "gabrielle’s midnight café ✦ enchanted library" })
    .setTimestamp();
}

function getUser(id) {
  if (!users[id]) {
    users[id] = {
      player: {
        name: null,
        style: null,
        level: 1,
        xp: 0,
        coins: 50,
        currentRoom: "library",
        unlockedRooms: ["library", "studyroom"],
      },
      cat: {
        name: null,
        breed: null,
        personality: null,
        mood: "cozy",
        friendship: 0,
      },
      inventory: {
        items: [],
        decorPlaced: [],
      },
      room: {
        name: "private study nook",
        decor: [],
        profileDisplay: {
          interests: [],
          authors: [],
          books: [],
          movies: [],
          music: [],
          subjects: [],
        },
      },
      reminders: {
        reading: true,
        study: true,
        time: "20:00",
      },
      progress: {
        fairyVisits: 0,
      },
    };
  }
  return users[id];
}

function addXP(user, amount) {
  user.player.xp += amount;
  let leveledUp = false;

  while (user.player.xp >= user.player.level * 100) {
    user.player.xp -= user.player.level * 100;
    user.player.level += 1;
    user.player.coins += 25;
    leveledUp = true;

    if (user.player.level >= 2 && !user.player.unlockedRooms.includes("hammock")) {
      user.player.unlockedRooms.push("hammock");
    }

    if (user.player.level >= 3 && !user.player.unlockedRooms.includes("common_room")) {
      user.player.unlockedRooms.push("common_room");
    }

    if (user.player.level >= 4 && !user.player.unlockedRooms.includes("law")) {
      user.player.unlockedRooms.push("law");
    }
  }

  return leveledUp;
}

function formatList(arr, fallback = "not set") {
  return arr.length ? arr.join(", ") : fallback;
}

client.once(Events.ClientReady, async () => {
  console.log(`🌙 Logged in as ${client.user.tag}`);

  const commands = [
    {
      name: "create-character",
      description: "Create your character",
      options: [
        {
          name: "name",
          description: "Your character name",
          type: 3,
          required: true,
        },
        {
          name: "style",
          description: "Your aesthetic style",
          type: 3,
          required: true,
        },
      ],
    },
    {
      name: "create-cat",
      description: "Create your cat companion",
      options: [
        {
          name: "name",
          description: "Your cat's name",
          type: 3,
          required: true,
        },
        {
          name: "breed",
          description: "Your cat's breed",
          type: 3,
          required: true,
        },
        {
          name: "personality",
          description: "Your cat's personality",
          type: 3,
          required: true,
        },
      ],
    },
    {
      name: "profile",
      description: "View your profile",
    },
    {
      name: "read",
      description: "Spend some quiet time reading",
    },
    {
      name: "shop",
      description: "Open the café and décor shop",
    },
    {
      name: "buy",
      description: "Buy an item from the shop",
      options: [
        {
          name: "item",
          description: "The item to buy",
          type: 3,
          required: true,
          choices: [
            { name: "coffee", value: "coffee" },
            { name: "cookie", value: "cookie" },
            { name: "evening wine", value: "wine" },
            { name: "herbal tea", value: "tea" },
            { name: "hot chocolate", value: "hot_chocolate" },
            { name: "candle", value: "candle" },
            { name: "blanket", value: "blanket" },
            { name: "pillow", value: "pillow" },
          ],
        },
      ],
    },
    {
      name: "inventory",
      description: "View your inventory",
    },
    {
      name: "studyroom",
      description: "View your private study nook",
    },
    {
      name: "setnook",
      description: "Set what your private nook displays",
      options: [
        {
          name: "category",
          description: "What to update",
          type: 3,
          required: true,
          choices: [
            { name: "interests", value: "interests" },
            { name: "favourite authors", value: "authors" },
            { name: "favourite books", value: "books" },
            { name: "favourite films / shows", value: "movies" },
            { name: "favourite music", value: "music" },
            { name: "favourite subjects", value: "subjects" },
          ],
        },
        {
          name: "value",
          description: "Comma-separated list",
          type: 3,
          required: true,
        },
      ],
    },
    {
      name: "rooms",
      description: "View your unlocked rooms",
    },
    {
      name: "go",
      description: "Travel to a room",
      options: [
        {
          name: "room",
          description: "The room to visit",
          type: 3,
          required: true,
          choices: [
            { name: "enchanted library", value: "library" },
            { name: "private study nook", value: "studyroom" },
            { name: "forest hammock nook", value: "hammock" },
            { name: "lantern common room", value: "common_room" },
            { name: "lantern court", value: "law" },
          ],
        },
      ],
    },
    {
      name: "reminders",
      description: "View your reminder settings",
    },
    {
      name: "setreminder",
      description: "Adjust your reminder settings",
      options: [
        {
          name: "type",
          description: "Which reminder to change",
          type: 3,
          required: true,
          choices: [
            { name: "reading", value: "reading" },
            { name: "study", value: "study" },
          ],
        },
        {
          name: "enabled",
          description: "Turn this reminder on or off",
          type: 5,
          required: true,
        },
      ],
    },
    {
      name: "fairy",
      description: "See whether the fairies visit tonight",
    },
    {
      name: "social",
      description: "Spend time in the common room",
    },
  ];

  await client.application.commands.set(commands);
  console.log("✨ Commands registered");
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const user = getUser(interaction.user.id);

  if (interaction.commandName === "create-character") {
    const name = interaction.options.getString("name");
    const style = interaction.options.getString("style");

    user.player.name = name;
    user.player.style = style;

    const embed = makeEmbed(
      "✨ character created",
      `**name:** ${name}\n**style:** ${style}\n\nYour place in the enchanted library begins here.`
    );

    await interaction.reply({ embeds: [embed] });
    return;
  }

  if (interaction.commandName === "create-cat") {
    const name = interaction.options.getString("name");
    const breed = interaction.options.getString("breed");
    const personality = interaction.options.getString("personality");

    user.cat.name = name;
    user.cat.breed = breed;
    user.cat.personality = personality;

    const embed = makeEmbed(
      "🐱 cat companion created",
      `**name:** ${name}\n**breed:** ${breed}\n**personality:** ${personality}\n\nA soft little presence now follows you through the library.`
    );

    await interaction.reply({ embeds: [embed] });
    return;
  }

  if (interaction.commandName === "profile") {
    const embed = makeEmbed(
      "🌙 your profile",
      `**name:** ${user.player.name || "not set"}\n` +
        `**style:** ${user.player.style || "not set"}\n` +
        `**level:** ${user.player.level}\n` +
        `**xp:** ${user.player.xp}/${user.player.level * 100}\n` +
        `**coins:** ${user.player.coins}\n` +
        `**current room:** ${rooms[user.player.currentRoom].name}\n\n` +
        `🐱 **cat:** ${user.cat.name || "not set"}\n` +
        `**breed:** ${user.cat.breed || "not set"}\n` +
        `**personality:** ${user.cat.personality || "not set"}\n` +
        `**mood:** ${user.cat.mood}`
    );

    await interaction.reply({ embeds: [embed] });
    return;
  }

  if (interaction.commandName === "read") {
    user.player.coins += 15;
    const leveledUp = addXP(user, 20);

    let desc =
      `📖 You settle into the lamplight and read quietly for a while.\n` +
      `🐱 ${user.cat.name || "Your cat"} stays close beside the pages.\n\n` +
      `🌙 +15 coins\n✨ +20 XP`;

    if (Math.random() < 0.35) {
      user.progress.fairyVisits += 1;
      desc += `\n\n${pickRandom(fairyMessages)}`;
    }

    if (leveledUp) {
      desc += `\n\n💜 You reached **level ${user.player.level}** and received **+25 bonus coins**.`;
    }

    const embed = makeEmbed("📚 quiet reading", desc);
    await interaction.reply({ embeds: [embed] });
    return;
  }

  if (interaction.commandName === "shop") {
    const embed = makeEmbed(
      "☕ midnight café & nook shop",
      `☕ **coffee** — 10 coins\n` +
        `🍪 **cookie** — 5 coins\n` +
        `🍷 **evening wine** — 15 coins\n` +
        `🌿 **herbal tea** — 12 coins\n` +
        `🍫 **hot chocolate** — 12 coins\n` +
        `🕯️ **candle** — 15 coins\n` +
        `🧺 **blanket** — 20 coins\n` +
        `🛏️ **pillow** — 15 coins\n\n` +
        `*The café glows softly while your cat watches from the window.*`
    );

    await interaction.reply({ embeds: [embed] });
    return;
  }

  if (interaction.commandName === "buy") {
    const itemKey = interaction.options.getString("item");
    const item = shopItems[itemKey];

    if (!item) {
      await interaction.reply({ content: "That item does not exist.", ephemeral: true });
      return;
    }

    if (user.player.coins < item.price) {
      await interaction.reply({ content: "🌙 Not enough coins for that.", ephemeral: true });
      return;
    }

    user.player.coins -= item.price;
    user.inventory.items.push(itemKey);

    const embed = makeEmbed(
      "🛍️ purchase complete",
      `You bought **${item.name}** for **${item.price} coins**.\n\n🌙 remaining coins: ${user.player.coins}`
    );

    await interaction.reply({ embeds: [embed] });
    return;
  }

  if (interaction.commandName === "inventory") {
    const items = user.inventory.items.length
      ? user.inventory.items.map((i) => `• ${shopItems[i]?.name || i}`).join("\n")
      : "empty";

    const embed = makeEmbed(
      "👜 inventory",
      `🌙 **coins:** ${user.player.coins}\n\n${items}`
    );

    await interaction.reply({ embeds: [embed] });
    return;
  }

  if (interaction.commandName === "studyroom") {
    const decorText = user.room.decor.length
      ? user.room.decor.map((item) => `• ${item}`).join("\n")
      : "• soft lamplight\n• a quiet chair\n• your cat nearby";

    const display = user.room.profileDisplay;

    const embed = makeEmbed(
      "🔒 your private study nook",
      `A hidden little room just for you.\n\n` +
        `🌿 vines curl around the shelves\n` +
        `✨ fireflies drift near the window\n` +
        `🐱 ${user.cat.name || "your cat"} rests beside your books\n\n` +
        `**decor**\n${decorText}\n\n` +
        `**interests**\n${formatList(display.interests)}\n\n` +
        `**favourite authors**\n${formatList(display.authors)}\n\n` +
        `**favourite books**\n${formatList(display.books)}\n\n` +
        `**favourite films / shows**\n${formatList(display.movies)}\n\n` +
        `**favourite music**\n${formatList(display.music)}\n\n` +
        `**favourite subjects**\n${formatList(display.subjects)}`
    );

    await interaction.reply({ embeds: [embed], ephemeral: true });
    return;
  }

  if (interaction.commandName === "setnook") {
    const category = interaction.options.getString("category");
    const value = interaction.options.getString("value");

    if (!user.room.profileDisplay[category]) {
      await interaction.reply({ content: "That nook category does not exist.", ephemeral: true });
      return;
    }

    user.room.profileDisplay[category] = value
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);

    await interaction.reply({
      content: `✨ Your study nook now displays your **${category}**.`,
      ephemeral: true,
    });
    return;
  }

  if (interaction.commandName === "rooms") {
    const roomList = user.player.unlockedRooms
      .map((roomKey) => `• ${rooms[roomKey].name}`)
      .join("\n");

    const embed = makeEmbed(
      "🏡 unlocked rooms",
      `${roomList}\n\n**current room:** ${rooms[user.player.currentRoom].name}`
    );

    await interaction.reply({ embeds: [embed] });
    return;
  }

  if (interaction.commandName === "go") {
    const roomKey = interaction.options.getString("room");

    if (!user.player.unlockedRooms.includes(roomKey)) {
      await interaction.reply({
        content: "🌙 You have not unlocked that room yet.",
        ephemeral: true,
      });
      return;
    }

    user.player.currentRoom = roomKey;

    const embed = makeEmbed(
      `🚪 ${rooms[roomKey].name}`,
      rooms[roomKey].description + `\n\n🐱 ${user.cat.name || "Your cat"} follows quietly behind you.`
    );

    await interaction.reply({ embeds: [embed] });
    return;
  }

  if (interaction.commandName === "reminders") {
    const embed = makeEmbed(
      "⏰ reminder settings",
      `📚 reading reminders: **${user.reminders.reading ? "on" : "off"}**\n` +
        `🕯️ study reminders: **${user.reminders.study ? "on" : "off"}**\n` +
        `🌙 reminder time: **${user.reminders.time}**`
    );

    await interaction.reply({ embeds: [embed], ephemeral: true });
    return;
  }

  if (interaction.commandName === "setreminder") {
    const type = interaction.options.getString("type");
    const enabled = interaction.options.getBoolean("enabled");

    user.reminders[type] = enabled;

    await interaction.reply({
      content: `✨ Your **${type}** reminders are now **${enabled ? "on" : "off"}**.`,
      ephemeral: true,
    });
    return;
  }

  if (interaction.commandName === "fairy") {
    user.progress.fairyVisits += 1;

    const embed = makeEmbed(
      "🧚 fairy visit",
      pickRandom(fairyMessages) + `\n\n🌙 total fairy visits: ${user.progress.fairyVisits}`
    );

    await interaction.reply({ embeds: [embed] });
    return;
  }

  if (interaction.commandName === "social") {
    user.player.coins += 5;
    const leveledUp = addXP(user, 5);

    let desc =
      `You spend a little while in the lantern common room, listening to quiet conversation and shared study talk.\n\n` +
      `🌙 +5 coins\n✨ +5 XP`;

    if (leveledUp) {
      desc += `\n\n💜 You reached **level ${user.player.level}** and received **+25 bonus coins**.`;
    }

    const embed = makeEmbed("🫖 lantern common room", desc);
    await interaction.reply({ embeds: [embed] });
    return;
  }
});

client.login(process.env.TOKEN);
{
  "name": "midnight-cafe-bot",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "discord.js": "^14.15.3"
  }
}

