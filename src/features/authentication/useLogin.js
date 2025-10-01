import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      toast.success("login successfully ");
      //هذه الخطوة تخزن بيانات المستخدم مباشرة في كاش React Query.
      queryClient.setQueryData(["user"], user.user);
      // بعد تسجيل الدخول، بدل ما كل مرة أي كود يستدعي useQuery(["user"]) يعمل fetch جديد من السيرفر، نقدر نخزن البيانات مباشرة في الكاش.

      // بالتالي أي جزء في التطبيق يستخدم useQuery(["user"]) هيلاقي البيانات جاهزة بدون انتظار fetch.
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("error", err);
      toast.error("provided email or password are incorrect");
    },
  });
  return { login, isLoading };
}

//تسجيل الدخول يخلق جلسة جديدة أو يحدث حالة الجلسة على السيرفر.

// لذلك العملية تغيير حالة → تستخدم useMutation حتى لو بعد كده "بتقرأ" بيانات المستخدم.
