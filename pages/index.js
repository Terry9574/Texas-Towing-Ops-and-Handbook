import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Texas Towing App</h1>
      {session ? (
        <>
          <p className="mb-4">Signed in as {session.user.email}</p>
          <button onClick={() => signOut()} className="bg-red-600 text-white px-4 py-2 rounded mb-4">Sign out</button>
        </>
      ) : (
        <button onClick={() => signIn()} className="bg-blue-600 text-white px-4 py-2 rounded mb-4">Sign in</button>
      )}

      <nav className="space-x-4">
        <Link href="/dispatch" className="text-blue-600 underline">Dispatch</Link>
        <Link href="/driver-calls" className="text-blue-600 underline">Driver Calls</Link>
        <Link href="/admin" className="text-blue-600 underline">Admin Panel</Link>
      </nav>
    </div>
  );
}
