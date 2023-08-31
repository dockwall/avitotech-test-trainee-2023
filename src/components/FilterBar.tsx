import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Menu } from "semantic-ui-react";
import {
  GameTagType,
  PlatformType,
  SortByType,
  gameTags,
  platforms,
  sortBy,
} from "../types/gameTypes";
import { fetchGames } from "../store/gameSlice";
import { AppDispatch, RootState } from "../store/store";
import { setFilters } from "../store/gameSlice";

const FilterBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.games.filters);

  const handlePlatformChange = (platform: PlatformType) => {
    const newFilters = { ...filters, platform };
    dispatch(setFilters(newFilters));
    dispatch(fetchGames(newFilters));
  };

  const handleCategoryChange = (category: GameTagType) => {
    console.log(category);
    const newFilters = { ...filters, category: category };
    dispatch(setFilters(newFilters));
    dispatch(fetchGames(newFilters));
  };

  const handleSortByChange = (sortBy: SortByType) => {
    const newFilters = { ...filters, "sort-by": sortBy };
    dispatch(setFilters(newFilters));
    dispatch(fetchGames(newFilters));
  };

  const platformOptions = Object.keys(platforms).map((key) => ({
    key,
    value: key,
    text: platforms[key as PlatformType],
  }));

  const tagOptions = Object.keys(gameTags).map((key) => ({
    key,
    value: key,
    text: gameTags[key as GameTagType],
  }));

  const sortByOptions = Object.keys(sortBy).map((key) => ({
    key,
    value: key,
    text: sortBy[key as SortByType],
  }));

  return (
    <Menu vertical fluid>
      <Dropdown
        value={filters.platform}
        placeholder="Выбрать платформу"
        options={platformOptions}
        onChange={(e, { value }) => handlePlatformChange(value as PlatformType)}
        fluid
        selection
      />
      <Dropdown
        value={filters.category}
        placeholder="Выбрать жанр"
        options={tagOptions}
        onChange={(e, { value }) => handleCategoryChange(value as GameTagType)}
        fluid
        selection
      />
      <Dropdown
        value={filters["sort-by"]}
        placeholder="Сортировать по"
        options={sortByOptions}
        onChange={(e, { value }) => handleSortByChange(value as SortByType)}
        fluid
        selection
      />
    </Menu>
  );
};

export default FilterBar;
