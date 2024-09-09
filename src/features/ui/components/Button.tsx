import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps {
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warn'
    | 'info'
    | 'default';
  children: ReactNode;
}
export function Button({ color = 'default', children }: ButtonProps) {
  const colorClass = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    success: 'bg-success-500',
    danger: 'bg-danger-500',
    warn: 'bg-warn-500',
    info: 'bg-info-500',
    default: 'bg-neutral-500',
  }[color];
  const hoverClass = {
    primary: 'hover:bg-primary-700',
    secondary: 'hover:bg-secondary-700',
    success: 'hover:bg-success-700',
    danger: 'hover:bg-danger-700',
    warn: 'hover:bg-warn-700',
    info: 'hover:bg-info-700',
    default: 'hover:bg-neutral-700',
  }[color];

  const focusClass = {
    primary: 'focus:bg-primary-700',
    secondary: 'focus:bg-secondary-700',
    success: 'focus:bg-success-700',
    danger: 'focus:bg-danger-700',
    warn: 'focus:bg-warn-700',
    info: 'focus:bg-info-700',
    default: 'focus:bg-neutral-700',
  }[color];

  return (
    <button
      className={twMerge(
        'inline-block rounded px-6 pt-2.5 pb-2 uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none',
        colorClass,
        hoverClass,
        focusClass,
      )}
    >
      {children}
    </button>
  );
}

export default Button;