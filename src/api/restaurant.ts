import axios from "axios";
import { useQuery } from "react-query";

import { RestaurantSearch } from "@/types";

import { SearchState } from "@/pages/Search";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchRestaurant = (
  searchState: SearchState,
  city?: string
) => {
  const createSearchRequest = async (): Promise<RestaurantSearch> => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);
    params.set("page", searchState.page.toString());
    params.set("selectedCuisines", searchState.selectedCuisines.join(","));
    params.set("sortOption", searchState.sortOption);

    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
      );

      return response.data;
    } catch (error) {
      throw new Error("Failed to get restaurants");
    }
  };

  const { data: results, isLoading } = useQuery(
    ["searchRestaurants", searchState],
    createSearchRequest,
    { enabled: city ? true : false }
  );

  return {
    results,
    isLoading,
  };
};
