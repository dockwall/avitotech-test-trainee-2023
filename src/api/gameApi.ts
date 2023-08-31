import axios from "axios";
import { Game, GameDetails, GameFilterParams } from "../types/gameTypes";

// Знаю что делаю - ключ будет перенесен на прокси бэкенд... в будущем
const RAPIDAPI_KEY = "e69500d004msh2486cdac20c1285p14d256jsn432bef221752";
const RAPIDAPI_HOST = "free-to-play-games-database.p.rapidapi.com";

const apiClient = axios.create({
  baseURL: `https://${RAPIDAPI_HOST}/api`,
  headers: {
    "X-RapidAPI-Key": RAPIDAPI_KEY,
    "X-RapidAPI-Host": RAPIDAPI_HOST,
  },
});

export const fetchGames = async (
  params?: GameFilterParams
): Promise<Game[]> => {
  let endpoint: "games" | "filter" = "games";
  let tagString: string | null = null;

  if (params?.tag?.length) {
    endpoint = "filter";
    tagString = params.tag.join(".");
  }

  const response = await apiClient.get<Game[]>(endpoint, {
    params: { ...params, tag: tagString },
  });

  return response.data;
};

export const fetchGameDetails = async (id: number): Promise<GameDetails> => {
  const response = await apiClient.get<GameDetails>("/game", {
    params: { id },
  });

  return response.data;
};
