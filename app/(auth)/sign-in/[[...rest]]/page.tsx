import { SignIn } from "@clerk/nextjs"

export default function signinpage(){
  return (
    <div>
      <SignIn withSignUp="false" signUpFallbackRedirectUrl="/dashboard"/>
    </div>
  )
}
