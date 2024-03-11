import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "react-query";

import { ThemeProvider } from "./providers/theme-provider.tsx";
import Auth0 from "./providers/auth0-provider.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Auth0>
          <ThemeProvider defaultTheme="dark">
            <Toaster visibleToasts={1} position="top-right" richColors />
            <App />
          </ThemeProvider>
        </Auth0>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
