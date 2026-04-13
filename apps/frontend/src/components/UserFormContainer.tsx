import { trpc } from '../trpc';
import { UserForm, type UserFormStatus } from './UserForm';

export function UserFormContainer(): JSX.Element {
  const utils = trpc.useUtils();
  const listUsers = trpc.listUsers.useQuery();
  const createUser = trpc.createUser.useMutation({
    onSuccess: () => {
      void utils.listUsers.invalidate();
    },
  });

  const status: UserFormStatus = createUser.isPending
    ? 'loading'
    : createUser.isError
      ? 'error'
      : (listUsers.data?.length ?? 0) === 0
        ? 'empty'
        : 'idle';

  return (
    <UserForm
      status={status}
      users={listUsers.data ?? []}
      errorMessage={createUser.error?.message}
      onSubmit={(values) => createUser.mutate(values)}
    />
  );
}
