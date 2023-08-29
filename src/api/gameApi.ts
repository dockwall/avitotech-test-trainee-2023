import axios from "axios";
import { Game, GameDetails, GameFilterParams } from "../types/gameTypes";

const RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY;
const RAPIDAPI_HOST = "free-to-play-games-database.p.rapidapi.com";
const BASE_URL = `https://${RAPIDAPI_HOST}/api`;

export const fetchAllGames = async (): Promise<Game[]> => {
  const response = await axios.get<Game[]>(`${BASE_URL}/games`, {
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": RAPIDAPI_HOST,
    },
  });
  return response.data;
};

export const fetchFilteredGames = async (
  params: GameFilterParams
): Promise<Game[]> => {
  let tagString: string | null = null;

  if (params.tag?.length) {
    tagString = params.tag.join(".");
  }

  const response = await axios.get<Game[]>(`${BASE_URL}/filter`, {
    params: { ...params, tag: tagString },
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": RAPIDAPI_HOST,
    },
  });
  return response.data;
};

export const fetchGameDetails = async (id: number): Promise<GameDetails> => {
  const response = await axios.get<GameDetails>(`${BASE_URL}/game`, {
    params: { id },
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": RAPIDAPI_HOST,
    },
  });
  return response.data;
};
