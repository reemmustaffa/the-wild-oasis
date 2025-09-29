import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/Constants";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  //FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // { field: "totalPrice", value: 5000, method: "lte" };

  //SORT
  const sortByRow = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRow.split("-");
  const sortBy = { field, direction };

  //PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  //QUERY
  const {
    isLoading,
    error,
    data: { data: bookings = [], count } = {},
  } = useQuery({
    //لو ما ضفتيش filter في queryKey → React Query مش هيعرف إنك محتاجة re-fetch لما filter يتغير. وساعتها مش هيتحدث غير لما تعملي refresh.
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });
  return { error, isLoading, bookings, count };
}

// ليه بحط filter في queryKey؟

// queryKey هو الـ dependency اللي React Query بيستخدمه علشان يعرف إمتى يعيد تنفيذ الـ query.

// React Query بتعمل shallow compare (مقارنة سطحية) للـ array اللي في queryKey.

// يعني لو filter اتغيرت قيمتها → React Query هتعاملها كـ query جديدة وتعمل re-fetch.
