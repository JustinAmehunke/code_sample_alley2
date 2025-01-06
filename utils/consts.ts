
import { Appolo, Bravy, Busy, Crypty, Default, Fanky, Fighty, Firy, Funny, game0, game1, game2, game3, game4, game5, game6, game7, game8, Genius, Gravity, Groovy, Hamstervertor, Homie, mainCharacter, Marta, mini_game, minigame1, minigame2, Punky, Rockstar, Smarty, Snoopy, Spacy, Wisy, Xenomorfy } from "@/images";
import { StaticImageData } from "next/image";

export const ALLOW_ALL_DEVICES = true;

export const WALLET_MANIFEST_URL = "";

export interface LevelData {
  name: string;
  minPoints: number;
  bigImage: StaticImageData;
  smallImage: StaticImageData;
  color: string;
  friendBonus: number;
  friendBonusPremium: number;
}

export const LEVELS: LevelData[] = [
  {
    name: "Bronze",
    minPoints: 0,
    bigImage: mainCharacter,
    smallImage: crystal1,
    color: "#2adaf8",
    friendBonus: 0,
    friendBonusPremium: 0,
  },
  {
    name: "Silver",
    minPoints: 5000,
    bigImage: mainCharacter,
    smallImage: crystal2,
    color: "#d64767",
    friendBonus: 20000,
    friendBonusPremium: 25000,
  },
  {
    name: "Gold",
    minPoints: 25000,
    bigImage: mainCharacter,
    smallImage: crystal3,
    color: "#e9c970",
    friendBonus: 30000,
    friendBonusPremium: 50000,
  },
  {
    name: "Platinum",
    minPoints: 100000,
    bigImage: mainCharacter,
    smallImage: crystal4,
    color: "#73e94b",
    friendBonus: 40000,
    friendBonusPremium: 75000,
  },
  {
    name: "Dimond",
    minPoints: 1000000,
    bigImage: mainCharacter,
    smallImage: crystal5,
    color: "#4ef0ba",
    friendBonus: 60000,
    friendBonusPremium: 100000,
  },
  {
    name: "Epic",
    minPoints: 2000000,
    bigImage: mainCharacter,
    smallImage: crystal6,
    color: "#1a3ae8",
    friendBonus: 100000,
    friendBonusPremium: 150000,
  },
  {
    name: "Legendary",
    minPoints: 10000000,
    bigImage: mainCharacter,
    smallImage: crystal7,
    color: "#902bc9",
    friendBonus: 250000,
    friendBonusPremium: 500000,
  },
  {
    name: "Master",
    minPoints: 50000000,
    bigImage: mainCharacter,
    smallImage: crystal8,
    color: "#fb8bee",
    friendBonus: 500000,
    friendBonusPremium: 1000000,
  },
  {
    name: "Grandmaster",
    minPoints: 100000000,
    bigImage: mainCharacter,
    smallImage: crystal9,
    color: "#e04e92",
    friendBonus: 1000000,
    friendBonusPremium: 2000000,
  }
];

export const DAILY_REWARDS = [
  500,
  1000,
  2500,
  5000,
  15000,
  25000,
  100000,
  500000,
  1000000,
  5000000
];

export const MAXIMUM_INACTIVE_TIME_FOR_MINE = 3*60*60*1000; // 3 hours in milliseconds

export const MAX_ENERGY_REFILLS_PER_DAY = 6;
export const ENERGY_REFILL_COOLDOWN = 60 * 60 * 1000; // 1 hour in milliseconds
export const TASK_WAIT_TIME = 60 * 60 * 1000; // 1 hour in milliseconds

export const REFERRAL_BONUS_BASE = 5000;
export const REFERRAL_BONUS_PREMIUM = 25000;


// Multitap
export const multitapUpgradeBasePrice = 1000;
export const multitapUpgradeCostCoefficient = 2;

export const multitapUpgradeBaseBenefit = 1;
export const multitapUpgradeBenefitCoefficient = 1;

// Energy
export const energyUpgradeBasePrice = 1000;
export const energyUpgradeCostCoefficient = 2;

export const energyUpgradeBaseBenefit = 500;
export const energyUpgradeBenefitCoefficient = 1;

// Mine (profit per hour)
export const mineUpgradeBasePrice = 1000;
export const mineUpgradeCostCoefficient = 1.5;

export const mineUpgradeBaseBenefit = 100;
export const mineUpgradeBenefitCoefficient = 1.2;
//
export interface SkinData {
  id: number;
  name: string;
  description: string;
  instruction: string;
  cost: number;
  bigImage: StaticImageData;
  smallImage: StaticImageData;
  purchased: boolean
};

export const SKINS: SkinData[] = [
  {
    id: 1,
    name: "Default",
    description: "",
    instruction: "",
    cost: 0,
    bigImage: Default,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 2,
    name: "Crypty",
    description: "Crypty ensures no one's identity is exposed. Crypty keeps sensitive information safe and protects against prying eyes, guaranteeing that privacy and anonymity are never compromised",
    instruction: "",
    cost: 0,
    bigImage: Crypty,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 3,
    name: "Snoopy",
    description: "A cool hamster with a light attitude towards the world, reads rap, solves problems",
    instruction: "",
    cost: 0,
    bigImage: Snoopy,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 4,
    name: "Firy",
    description: "A fire-breathing winged hamster with a difficult character",
    instruction: "",
    cost: 0,
    bigImage: Firy,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 5,
    name: "Xenomorfy",
    description: "An alien hamster, science knows little about him",
    instruction: "",
    cost: 0,
    bigImage: Xenomorfy,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 6,
    name: "Marta",
    description: "Marta is the kind-hearted hamster who loves helping others and always has a warm smile for everyone",
    instruction: "",
    cost: 2500000,
    bigImage: Marta,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 7,
    name: "Homie",
    description: "Homie is the loyal friend who enjoys spending time with his buddies and always knows how to make everyone feel at home",
    instruction: "",
    cost: 2500000,
    bigImage: Homie,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 8,
    name: "Fighty",
    description: "Fighty is full of energy and enthusiasm, always up for a fun adventure or a new game with friends",
    instruction: "",
    cost: 2500000,
    bigImage: Fighty,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 9,
    name: "Rockstar",
    description: "Rockstar loves music and is always ready to play a tune or sing a song to lift everyone's spirits",
    instruction: "",
    cost: 2500000,
    bigImage: Rockstar,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 10,
    name: "Fanky",
    description: "Fanky is the life of the party, bringing joy and laughter with funky dance moves and a great sense of humor",
    instruction: "",
    cost: 24000,
    bigImage: Fanky,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 11,
    name: "Punky",
    description: "Punky is cool and edgy, with a unique style and a knack for turning heads wherever they go",
    instruction: "",
    cost: 10000000,
    bigImage: Punky,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 12,
    name: "Groovy",
    description: "Groovy is smooth and stylish, always on top of the latest trends and loves to spread good vibes",
    instruction: "",
    cost: 10000000,
    bigImage: Groovy,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 13,
    name: "Funny",
    description: "Funny is the comedian of the group, always making everyone laugh with jokes and playful antics",
    instruction: "",
    cost: 10000000,
    bigImage: Funny,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 14,
    name: "Hamstervertor",
    description: "Hamstervestor is the entrepreneurial spirit, always coming up with new ideas and ways to make things better for everyone",
    instruction: "",
    cost: 50000000,
    bigImage: Hamstervertor,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 15,
    name: "Busy",
    description: "Busy is always active and loves staying productive, whether organizing events or helping friends with their tasks",
    instruction: "",
    cost: 50000000,
    bigImage: Busy,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 16,
    name: "Spacy",
    description: "Spacy is the adventurous astronaut who loves exploring the far reaches of the galaxy, always dreaming of new planets to visit and stars to study",
    instruction: "",
    cost: 50000000,
    bigImage: Spacy,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 17,
    name: "Bravy",
    description: "Bravy is courageous and inspiring, always encouraging friends to try new things and be their best selves",
    instruction: "",
    cost: 50000000,
    bigImage: Bravy,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 18,
    name: "Smarty",
    description: "Smarty loves learning and sharing knowledge, always curious and eager to explore new topics and ideas",
    instruction: "",
    cost: 100000000,
    bigImage: Smarty,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 19,
    name: "Genius",
    description: "Genius is incredibly smart and inventive, always tinkering with new projects and solving puzzles",
    instruction: "",
    cost: 200000000,
    bigImage: Genius,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 20,
    name: "Gravity",
    description: "Gravity is the expert on all things related to the forces of space, keeping everyone grounded with a deep understanding of how the universe holds together",
    instruction: "",
    cost: 200000000,
    bigImage: Gravity,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 21,
    name: "Appolo",
    description: "Appolo is the mission commander with a passion for space exploration and discovery, always ready to lead the crew on exciting interstellar journeys",
    instruction: "",
    cost: 100000000,
    bigImage: Appolo,
    smallImage: crystal9,
    purchased: false,
  },
  {
    id: 22,
    name: "Wisy",
    description: "Wisy is wise and thoughtful, offering great advice and guidance to friends in need",
    instruction: "",
    cost: 500000000,
    bigImage: Wisy,
    smallImage: crystal9,
    purchased: false,
  },
]

export interface GameData {
  id: number;
  name: string;
  description: string;
  keys: string;
  timer: string;
  bigImage: StaticImageData;
  purchased: boolean
  newTag: boolean;
};

export const GAME: GameData[] = [
  {
    id: 1,
    name: "Cafe Dash",
    description: "",
    keys: "0/4",
    timer: "",
    bigImage: game0,
    purchased: false,
    newTag: true,
  },
  {
    id: 1,
    name: "Mow and Tim",
    description: "",
    keys: "0/4",
    timer: "",
    bigImage: game1,
    purchased: false,
    newTag: true,
  },
  {
    id: 1,
    name: "Chain Cube 2048",
    description: "",
    keys: "0/4",
    timer: "",
    bigImage: game2,
    purchased: false,
    newTag: false,
  },
  {
    id: 1,
    name: "Train Miner",
    description: "",
    keys: "0/4",
    timer: "",
    bigImage: game3,
    purchased: false,
    newTag: false,
  },
  {
    id: 1,
    name: "Merge Away",
    description: "",
    keys: "0/4",
    timer: "",
    bigImage: game4,
    purchased: false,
    newTag: false,
  },
  {
    id: 1,
    name: "Twerk Race",
    description: "",
    keys: "0/4",
    timer: "",
    bigImage: game5,
    purchased: false,
    newTag: false,
  },
  {
    id: 1,
    name: "Polysphere",
    description: "",
    keys: "0/4",
    timer: "",
    bigImage: game6,
    purchased: false,
    newTag: false,
  },
  {
    id: 1,
    name: "Bike Ride 3D",
    description: "",
    keys: "0/4",
    timer: "",
    bigImage: game7,
    purchased: false,
    newTag: false,
  },
  {
    id: 1,
    name: "Mud Racing",
    description: "",
    keys: "0/4",
    timer: "",
    bigImage: game8,
    purchased: false,
    newTag: false,
  },
];

export interface MiniGameData {
  id: number;
  name: string;
  description: string;
  keys: number;
  timer: string;
  bigImage: StaticImageData;
  purchased: boolean
};

export const MINIGAME: MiniGameData[] = [
  {
    id: 1,
    name: "Puzzle game",
    description: "",
    keys: 0,
    timer: "",
    bigImage: minigame1,
    purchased: false,
  },
  {
    id: 1,
    name: "Hexa game",
    description: "",
    keys: 0,
    timer: "",
    bigImage: minigame2,
    purchased: false,
  },
];