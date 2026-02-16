import UsersHeader from '@/components/dashboard/users/UsersHeader';

const UsersLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <UsersHeader />
      <div className="p-8">{children}</div>
    </div>
  );
};

export default UsersLayout;
