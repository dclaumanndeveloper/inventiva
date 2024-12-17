import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar.tsx"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
    <div className="flex h-screen">
      <AppSidebar />
      <div className="flex-1 relative"> {/* Container relativo para o trigger */}
        <SidebarTrigger className="absolute top-4 left-4 z-10 md:hidden" /> {/* Trigger posicionado e oculto em telas maiores */}
        <main className="p-4 md:pl-[250px] md:pt-4"> {/* Padding para o main em telas maiores */}
          {children}
        </main>
      </div>
    </div>
  </SidebarProvider>
  )
}
