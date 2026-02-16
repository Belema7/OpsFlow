import UsersTable from '@/components/dashboard/users/UsersTable';

const UsersPage = async () => {
  const res = await fetch('https://dummyjson.com/users', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  const data = await res.json();

  const usersList = data.users;
  const total = data.total;

  return (
    <div className="max-w-6xl mx-auto">
      <UsersTable users={usersList} total={total} />
    </div>
  );
};

export default UsersPage;
