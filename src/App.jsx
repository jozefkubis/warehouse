import GlobalStyles from "./styles/GlobalStyles"
import { Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Orders from "./pages/Orders"
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import PageNotFound from "./pages/PageNotFound"
import Users from "./pages/Users"
import Account from "./pages/Account"
import AppLayout from "./ui/AppLayout"
import WarehouseStore from "./pages/WarehouseStore"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="warehousestore" element={<WarehouseStore />} />
            <Route path="orders" element={<Orders />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
