import axios from "axios";
import { Game, GameDetails, GameFilterParams } from "../types/gameTypes";

const BASE_URL = "https://www.freetogame.com/api";

export const fetchAllGames = async (): Promise<Game[]> => {
  const response = await axios.get<Game[]>(`${BASE_URL}/games`);
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
  });
  return response.data;
};

export const fetchGameDetails = async (id: number): Promise<GameDetails> => {
  const response = await axios.get<GameDetails>(`${BASE_URL}/game`, {
    params: { id },
  });
  return response.data;
};
