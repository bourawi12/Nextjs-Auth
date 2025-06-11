
import { auth,signOut, signIn } from "@/auth"
 
export default async function SignIn() {
    const session = await auth();
    console.log(session);
    const user = session?.user;
  return user ?(
    <>
    <p>Welcome, {user.name}!</p>
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">SignOut</button>
    </form>
    </>
  )
  :(
    <>
    <p>You are not signed in.</p>
    <form
      action={async () => {
        "use server"
        await signIn("google" , {redirectTo : '/secret'})
      }}
    >
      <button type="submit">SignIn with Google</button>
    </form>
    </>
  )
}