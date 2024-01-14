import React from "react";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";

import './styles.css'
import { ThemeConfig } from "../config/theme.config";

function index() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeConfig>
        <App />
      </ThemeConfig>
    </QueryClientProvider>
  );
}

export default index;