import DynamicRoleProtected from '../components/WithRoleProtection';

export default function DispatchPage() {
  return (
    <DynamicRoleProtected allowedRoles={['dispatcher']}>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Dispatch Dashboard</h1>
        <p>This is the dispatcher's workspace. Load incoming jobs, assign drivers, and track status.</p>
      </div>
    </DynamicRoleProtected>
  );
}
