import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
}

const VARIANT_STYLES: Record<ButtonVariant, React.CSSProperties> = {
  primary: { background: '#2563eb', color: '#fff', border: '1px solid #2563eb' },
  secondary: { background: '#fff', color: '#111827', border: '1px solid #d1d5db' },
  danger: { background: '#dc2626', color: '#fff', border: '1px solid #dc2626' },
};

const SIZE_STYLES: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: '0.25rem 0.625rem', fontSize: '0.8125rem', borderRadius: 4 },
  md: { padding: '0.5rem 0.875rem', fontSize: '0.9375rem', borderRadius: 6 },
  lg: { padding: '0.75rem 1.125rem', fontSize: '1rem', borderRadius: 8 },
};

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  leftIcon,
  disabled,
  type = 'button',
  children,
  ...rest
}: ButtonProps): JSX.Element {
  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={isLoading || undefined}
      data-variant={variant}
      data-size={size}
      style={{
        ...VARIANT_STYLES[variant],
        ...SIZE_STYLES[size],
        width: fullWidth ? '100%' : undefined,
        opacity: isDisabled ? 0.6 : 1,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        fontWeight: 500,
        lineHeight: 1.2,
        transition: 'opacity 120ms ease',
      }}
      {...rest}
    >
      {isLoading ? <span aria-hidden>…</span> : leftIcon}
      <span>{children}</span>
    </button>
  );
}
