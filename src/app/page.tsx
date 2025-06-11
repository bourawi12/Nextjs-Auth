import { auth } from "@/auth"
import { signIn, signOut } from "@/auth"

export default async function Home() {
  const session = await auth()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">NextAuth Demo</h1>
        
        {session ? (
          <div className="text-center">
            <p className="mb-4">Welcome, {session.user?.name}!</p>
            <p className="mb-4">Email: {session.user?.email}</p>
           
            <form
              action={async () => {
                "use server"
                await signOut()
              }}
            >
              <button 
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Sign Out
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center">
            <p className="mb-4">You are not signed in</p>
            <form
              action={async () => {
                "use server"
                await signIn()
              }}
            >
              <button 
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Sign In
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}