import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      //عشان امسحهم كلهم من  الكاش بردو لان سجلت الخروج
      queryClient.removeQueries();
      //النتيجة: المستخدم يروح صفحة login وما يقدرش يرجع للصفحة السابقة بالـ Back.
      navigate("/login", { replace: true });
    },
  });
  return { logout, isLoading };
}
