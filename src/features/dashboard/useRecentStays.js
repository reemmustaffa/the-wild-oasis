import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
  const [seacrchParams] = useSearchParams();
  const numDayas = !seacrchParams.get("last")
    ? 7
    : Number(seacrchParams.get("last"));

  //90بيطرح تاريخ النهارده من عدد الايام اللي مبعوته سواء 7او 30 او
  const queryDate = subDays(new Date(), numDayas).toISOString();
  const { isLoading, data: stays } = useQuery({
    queryKey: ["stays", `last-${numDayas}`],
    queryFn: () => getStaysAfterDate(queryDate),
  });
  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  return { isLoading, stays, confirmedStays };
}
