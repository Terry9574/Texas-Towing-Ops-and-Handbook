import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function RoleProtected({ allowedRoles, children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    if (!session || !allowedRoles.includes(session.user.role)) {
      router.push('/unauthorized');
    }
  }, [session, status, allowedRoles, router]);

  if (status === 'loading') {
    return <div className="p-6">Checking access...</div>;
  }

  if (!session) {
    return <div className="p-6 text-red-600">You must be logged in to access this page.</div>;
  }

  if (!allowedRoles.includes(session.user.role)) {
    return <div className="p-6 text-red-600">You do not have permission to view this page.</div>;
  }

  return children;
}

export default RoleProtected;
