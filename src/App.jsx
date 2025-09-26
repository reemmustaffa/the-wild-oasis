import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";

//مسئول عن تخزين البيانات (caching).

// متابعة حالة الـ queries (loading, error, success).

// تحديث البيانات (refetching).
//ده الـ مدير الكاش في React Query، اللي بيخزن الداتا اللي جايه من الـ API ويتابع حالتها (fresh, stale, loading...).
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // أي بيانات بترجع من query هتعتبر حديثة (fresh) لمدة دقيقة.
      // staleTime: 60 * 1000,
      // انا مش عايزاها تاخد وقت عمما تتغير لان هتفضل محتفظه بالقديم
      staleTime: 0,
    },
  },
});

function App() {
  return (
    // بيخلي queryClient متاح لكل الكومبوننتس اللي جوه التطبيق
    <QueryClientProvider client={queryClient}>
      {/* ReactQueryDevtools → أداة Debugging تشوف منها الكاش والـ queries */}
      <ReactQueryDevtools initialIsOpen={false} />

      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {/* layout route:because it dose not has path prop  */}
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/cabins" element={<Cabins />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/account" element={<Account />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
