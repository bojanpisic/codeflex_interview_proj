import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "context/authContext";
import { BreadCrumbProvider } from "context/breadCrumbContext";
import AppRoutes from "routes/AppRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BreadCrumbProvider>
          <AppRoutes />
        </BreadCrumbProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
