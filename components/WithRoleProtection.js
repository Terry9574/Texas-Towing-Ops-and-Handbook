import dynamic from 'next/dynamic';

const DynamicRoleProtected = dynamic(() => import('./RoleProtected').then(mod => mod.default), { ssr: false });

export default DynamicRoleProtected;
