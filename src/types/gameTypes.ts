export const GameTags = {
  mmorpg: "MMORPG",
  shooter: "Shooter",
  strategy: "Strategy",
  moba: "MOBA",
  racing: "Racing",
  sports: "Sports",
  social: "Social",
  sandbox: "Sandbox",
  "open-world": "Open World",
  survival: "Survival",
  pvp: "PvP",
  pve: "PvE",
  pixel: "Pixel",
  voxel: "Voxel",
  zombie: "Zombie",
  "turn-based": "Turn-based",
  "first-person": "First-Person",
  "third-Person": "Third-Person",
  "top-down": "Top-Down",
  tank: "Tank",
  space: "Space",
  sailing: "Sailing",
  "side-scroller": "Side-Scroller",
  superhero: "Superhero",
  permadeath: "Permadeath",
  card: "Card",
  "battle-royale": "Battle Royale",
  mmo: "MMO",
  mmofps: "MMOFPS",
  mmotps: "MMOTPS",
  "3d": "3D",
  "2d": "2D",
  anime: "Anime",
  fantasy: "Fantasy",
  "sci-fi": "Sci-Fi",
  fighting: "Fighting",
  "action-rpg": "Action RPG",
  action: "Action",
  military: "Military",
  "martial-arts": "Martial Arts",
  flight: "Flight",
  "low-spec": "Low Spec",
  "tower-defense": "Tower Defense",
  horror: "Horror",
  mmorts: "MMORTS",
};

export const Platforms = {
  pc: "PC",
  browser: "Browser",
  all: "All",
};

export const SortByOptions = {
  "release-date": "Release Date",
  popularity: "Popularity",
  alphabetical: "Alphabetical",
  relevance: "Relevance",
};

export type GameTagType = keyof typeof GameTags;
export type PlatformType = keyof typeof Platforms;
export type SortByType = keyof typeof SortByOptions;

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

export interface GameDetails extends Game {
  status: string;
  description: string;
  minimum_system_requirements: MinimumSystemRequirements;
  screenshots: Screenshot[];
}

export interface Screenshot {
  id: string;
  image: string;
}

export interface MinimumSystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface GameFilterParams {
  platform?: PlatformType;
  category?: GameTagType;
  tag?: GameTagType[];
  "sort-by"?: SortByType;
  id?: number;
}
