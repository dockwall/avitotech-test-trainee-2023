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
  platform?: "pc" | "browser" | "all";
  category?: GameTag;
  tag?: GameTag[];
  "sort-by"?: "release-date" | "popularity" | "alphabetical" | "relevance";
  id?: number;
}

export type GameTag =
  | "mmorpg"
  | "shooter"
  | "strategy"
  | "moba"
  | "racing"
  | "sports"
  | "social"
  | "sandbox"
  | "open-world"
  | "survival"
  | "pvp"
  | "pve"
  | "pixel"
  | "voxel"
  | "zombie"
  | "turn-based"
  | "first-person"
  | "third-Person"
  | "top-down"
  | "tank"
  | "space"
  | "sailing"
  | "side-scroller"
  | "superhero"
  | "permadeath"
  | "card"
  | "battle-royale"
  | "mmo"
  | "mmofps"
  | "mmotps"
  | "3d"
  | "2d"
  | "anime"
  | "fantasy"
  | "sci-fi"
  | "fighting"
  | "action-rpg"
  | "action"
  | "military"
  | "martial-arts"
  | "flight"
  | "low-spec"
  | "tower-defense"
  | "horror"
  | "mmorts";
