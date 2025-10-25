import { SignIn } from "@clerk/nextjs"

export default function signinpage(){
  return (
    <div>
      <SignIn withsignup="false" fallbackredirecturl="/dashboard"/>
    </div>
  )
}
