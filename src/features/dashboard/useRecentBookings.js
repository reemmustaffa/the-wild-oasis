import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [seacrchParams] = useSearchParams();
  const numDayas = !seacrchParams.get("last")
    ? 7
    : Number(seacrchParams.get("last"));

  //90بيطرح تاريخ النهارده من عدد الايام اللي مبعوته سواء 7او 30 او
  const queryDate = subDays(new Date(), numDayas).toISOString();
  const { isLoading, data: bookings } = useQuery({
    queryKey: ["bookings", `last-${numDayas}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  });
  return { isLoading, bookings };
}
