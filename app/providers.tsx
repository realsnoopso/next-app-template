import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { OverlayProvider } from "@/components/providers/OverlayProvider";
import { QueryClientProvider } from "@/components/providers/QueryClientProvider";
import { Toaster } from "@/components/ui/toaster";

export default function Providers({ children }: { children: React.ReactNode }) {
  {
    /* dark mode 활성화하려면 ThemeProvider에 attribute="class" 추가 */
  }
  return (
    <>
      <QueryClientProvider>
        <ThemeProvider defaultTheme="system" enableSystem>
          <OverlayProvider>
            {children}
            <Toaster />
          </OverlayProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
