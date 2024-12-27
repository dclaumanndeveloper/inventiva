import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar.tsx"
import { useIsMobile } from "@/hooks/use-mobile";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
 
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />
        <div className="flex-1 relative md:pt-4">
        {isMobile && (
            <SidebarTrigger className="absolute top-4 left-4 z-10 md:hidden" />
          )}
          <main className="p-4 md:pt-4 md:mr-4 w-full h-full mt-10">
            <div className="w-full h-full justify-items-center"> 
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
