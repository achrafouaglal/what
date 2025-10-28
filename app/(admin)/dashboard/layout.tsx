import { ReactNode } from "react"
import { ClerkProvider } from "@clerk/nextjs"
import { DashboardGuard } from "@/components/DashboardGuard"


export default function DashboardLayout({
  children
}: { children : ReactNode}){



  





  return(
    <ClerkProvider>
      <DashboardGuard>
        {children}
      </DashboardGuard>  
    </ClerkProvider>
  )
}

