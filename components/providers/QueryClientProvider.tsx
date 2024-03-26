"use client";

import * as React from "react";
import {
  QueryClient,
  QueryClientProvider as TanstackQueryClientProvider,
} from "@tanstack/react-query";

export function QueryClientProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <TanstackQueryClientProvider {...props} client={queryClient}>
      {children}
    </TanstackQueryClientProvider>
  );
}
