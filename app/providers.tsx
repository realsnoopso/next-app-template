import { ThemeProvider } from "@/components/providers/theme-provider";
import { OverlayProvider } from "@/components/providers/overlay-provider";
import { QueryClientProvider } from "@/components/providers/query-client-provider";
import { Toaster } from "@/components/ui/toaster";

export default function Providers({ children }: { children: React.ReactNode }) {
  {
    /* dark mode 활성화하려면 ThemeProvider에 attribute="class" 추가 */
  }
  return (
    <>
      <QueryClientProvider>
        <ThemeProvider enableSystem attribute="class">
          <OverlayProvider>
            {children}
            <Toaster />
          </OverlayProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
