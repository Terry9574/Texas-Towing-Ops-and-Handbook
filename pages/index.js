
// pages/index.js

import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 32 }}>
      <h1>Welcome to Texas Towing Ops & Handbook</h1>
      {session ? (
        <div>
          <p>Signed in as {session.user.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>You are not signed in.</p>
          <button onClick={() => signIn()}>Sign In</button>
        </div>
      )}
    </div>
  );
}
