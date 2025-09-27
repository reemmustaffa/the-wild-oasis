import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    // identify the data
    queryKey: ["cabins"],
    // responsible for fetching data from api
    queryFn: getCabins,
  });
  return { isLoading, cabins, error };
}
