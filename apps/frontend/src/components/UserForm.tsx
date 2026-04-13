import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserSchema, type CreateUserInput } from '@octo/trpc';
import { Button } from './Button';
import { Input } from './Input';

export type UserFormStatus = 'idle' | 'loading' | 'error' | 'empty';

export interface UserListItem {
  id: string;
  name: string;
  email: string;
}

export interface UserFormProps {
  status: UserFormStatus;
  users?: UserListItem[];
  errorMessage?: string;
  onSubmit: (values: CreateUserInput) => void;
}

export function UserForm({
  status,
  users = [],
  errorMessage,
  onSubmit,
}: UserFormProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
    defaultValues: { name: '', email: '' },
  });

  const isLoading = status === 'loading';

  return (
    <section aria-labelledby="user-form-heading">
      <h2 id="user-form-heading">Create user</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          id="user-name"
          label="Name"
          required
          disabled={isLoading}
          error={errors.name?.message}
          {...register('name')}
        />

        <Input
          id="user-email"
          label="Email"
          type="email"
          required
          disabled={isLoading}
          error={errors.email?.message}
          {...register('email')}
        />

        <Button type="submit" isLoading={isLoading}>
          Create user
        </Button>
      </form>

      {status === 'error' && errorMessage && (
        <p role="alert" style={{ color: 'crimson', marginTop: '1rem' }}>
          {errorMessage}
        </p>
      )}

      {status === 'empty' && (
        <p style={{ marginTop: '1rem', color: '#666' }}>
          No users yet. Create the first one.
        </p>
      )}

      {status === 'idle' && users.length > 0 && (
        <ul style={{ marginTop: '1rem' }}>
          {users.map((u) => (
            <li key={u.id}>
              {u.name} &lt;{u.email}&gt;
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
