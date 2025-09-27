import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  //ده هو الـ object اللي بيدير الكاش بتاع React Query
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    //دي هتنفذ بعد مايحصل مسح عشان تعمل ريفتش عشان ال ui يتعدل
    onSuccess: () => {
      toast.success("cabin successfully deleted");
      //→ ده بيقول لReact Query: "الكاش بتاع الكويري دي بقى قديم، اعمل refetch"
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isDeleting, deleteCabin };
}
