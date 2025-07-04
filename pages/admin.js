import DynamicRoleProtected from '../components/WithRoleProtection';

export default function AdminPanel() {
  return (
    <DynamicRoleProtected allowedRoles={['admin']}>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <p>Manage users, roles, and system configuration here.</p>
      </div>
    </DynamicRoleProtected>
  );
}
