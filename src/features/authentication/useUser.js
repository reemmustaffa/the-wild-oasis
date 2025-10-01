import { useQuery } from "@tanstack/react-query";
import { getCurrentUsrer } from "../../services/apiAuth";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUsrer,
  });
  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}
