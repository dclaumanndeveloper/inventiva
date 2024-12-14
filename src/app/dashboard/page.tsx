import { AppSidebar } from "@/components/app-sidebar"
import { AreaChartUI } from "@/components/ui/areaChart"
import {
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
       <h1 className="font-serif font-medium text-ellipsis text-balance text-center ">Bem vindo ao Inventiva Apps</h1>
       <br/>
       <div className="flex justify-center items-center">
        <AreaChartUI/>
       </div>
    </SidebarProvider>
  )
}
