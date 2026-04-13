import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  id: string;
  label: string;
  size?: InputSize;
  error?: string;
  helperText?: ReactNode;
}

const SIZE_STYLES: Record<InputSize, React.CSSProperties> = {
  sm: { padding: '0.25rem 0.5rem', fontSize: '0.8125rem', borderRadius: 4 },
  md: { padding: '0.5rem 0.75rem', fontSize: '0.9375rem', borderRadius: 6 },
  lg: { padding: '0.75rem 0.875rem', fontSize: '1rem', borderRadius: 8 },
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    id,
    label,
    size = 'md',
    error,
    helperText,
    required,
    disabled,
    style,
    ...rest
  },
  ref,
) {
  const hasError = Boolean(error);
  const describedBy = hasError
    ? `${id}-error`
    : helperText
      ? `${id}-helper`
      : undefined;

  return (
    <div style={{ marginBottom: '0.75rem' }}>
      <label
        htmlFor={id}
        style={{
          display: 'block',
          fontSize: 14,
          fontWeight: 500,
          marginBottom: 4,
          color: '#111827',
        }}
      >
        {label}
        {required && (
          <span aria-hidden style={{ color: '#dc2626', marginLeft: 2 }}>
            *
          </span>
        )}
      </label>

      <input
        id={id}
        ref={ref}
        disabled={disabled}
        required={required}
        aria-invalid={hasError || undefined}
        aria-describedby={describedBy}
        aria-required={required || undefined}
        data-size={size}
        style={{
          ...SIZE_STYLES[size],
          width: '100%',
          boxSizing: 'border-box',
          border: `1px solid ${hasError ? '#dc2626' : '#d1d5db'}`,
          background: disabled ? '#f3f4f6' : '#fff',
          color: '#111827',
          outline: 'none',
          transition: 'border-color 120ms ease',
          ...style,
        }}
        {...rest}
      />

      {hasError && (
        <p
          id={`${id}-error`}
          role="alert"
          style={{ color: '#dc2626', fontSize: 13, margin: '4px 0 0' }}
        >
          {error}
        </p>
      )}

      {!hasError && helperText && (
        <p
          id={`${id}-helper`}
          style={{ color: '#6b7280', fontSize: 13, margin: '4px 0 0' }}
        >
          {helperText}
        </p>
      )}
    </div>
  );
});
