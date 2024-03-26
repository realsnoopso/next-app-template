"use client";

import * as React from "react";
import { OverlayProvider as TossOverlayProvider } from "@toss/use-overlay";

export function OverlayProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return <TossOverlayProvider {...props}>{children}</TossOverlayProvider>;
}
