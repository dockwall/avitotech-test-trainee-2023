import axios from "axios";
import { Game, GameDetails, GameFilterParams } from "../types/gameTypes";

const RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY;
const RAPIDAPI_HOST = "free-to-play-games-database.p.rapidapi.com";

const apiClient = axios.create({
  baseURL: `https://${RAPIDAPI_HOST}/api`,
  headers: {
    "X-RapidAPI-Key": RAPIDAPI_KEY,
    "X-RapidAPI-Host": RAPIDAPI_HOST,
  },
});

export const fetchAllGames = async (): Promise<Game[]> => {
  const response = await apiClient.get<Game[]>("/games");
  return response.data;
};

export const fetchFilteredGames = async (
  params: GameFilterParams
): Promise<Game[]> => {
  const tagString = params.tag?.length ? params.tag.join(".") : null;
  const response = await apiClient.get<Game[]>("/filter", {
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
