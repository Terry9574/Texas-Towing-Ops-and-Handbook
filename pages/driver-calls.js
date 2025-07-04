import DynamicRoleProtected from '../components/WithRoleProtection';

export default function DriverCallsPage() {
  return (
    <DynamicRoleProtected allowedRoles={['driver']}>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Driver Calls</h1>
        <p>This view lists the calls and tows assigned to the current driver.</p>
      </div>
    </DynamicRoleProtected>
  );
}
