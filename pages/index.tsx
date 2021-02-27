import Head from 'next/head'
import Layout from '../components/layout'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  const [session, loading] = useSession();
  return
  <Layout>
    {!session && <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.name} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>}
  </Layout>
}
