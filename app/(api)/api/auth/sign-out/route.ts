import { auth ,clerkClient } from "@clerk/nextjs/server"


export async function POST() {
  const { sessionId } = auth()


  if (!sessionId) return Response.json({error:"No session"},{status:401})

  await clerkClient.sessions.revokeSession(sessionId);



  return Response.json({ ok: true });
}
