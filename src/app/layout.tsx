import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar.tsx"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
    <div className="flex h-screen">
      <AppSidebar />
      <div className="flex-1 relative  md:pt-4">
        <SidebarTrigger className="absolute top-4 left-4 z-10 md:hidden" />
        <main className="p-4 md:pt-4 md:mr-4  w-full h-full"> 
          {children}
        </main>
      </div>
    </div>
  </SidebarProvider>
 
  )
}
