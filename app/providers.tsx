import { ThemeProvider } from "@/components/theme-provider";
import { OverlayProvider } from "@/components/OverlayProvider";
import { QueryClientProvider } from "@/components/QueryClientProvider";
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
