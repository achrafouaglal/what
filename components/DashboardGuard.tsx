"use client"

import { ReactNode , useEffect } from "react"


import { useRouter } from "next/navigation"




import { useUser } from "@clerk/nextjs"






export function DashboardGuard( { children }: {children : ReactNode}){
  const { isLoaded , isSignedIn , user } = useUser();
  const router = useRouter();

  if(!isLoaded){
    return (
      <h1>is Loading</h1>
    )
  }
  
  if(!isSignedIn){
    return(
      <h1>Isnt Sign In</h1>
    )
  }

  



  return(
    <>
      {children}
      { JSON.stringify(user) }
    </>
  )
}
