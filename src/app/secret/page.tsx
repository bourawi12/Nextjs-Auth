import {auth } from "@/auth"
import {redirect } from "next/navigation";
export default async function Secret() {
  const session = await auth();
  console.log(session);
  const user = session?.user;
  return user ? (
    <div>
      <h1>Secret Page</h1>
      <p>Welcome, {user.name}!</p>
      <p>Your email: {user.email}</p>
    </div>
  ) : (
    redirect("/profile") // Redirect to profile page if not authenticated
  );
}