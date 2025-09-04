import React from 'react';
import { cn } from '@/lib/utils';

interface MacOSIconProps {
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

export const MacOSIcon = ({ 
  icon: Icon, 
  className, 
  size = 'md',
  variant = 'default'
}: MacOSIconProps) => {
  const sizeStyles = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4', 
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  const variantStyles = {
    default: 'text-gray-600',
    primary: 'text-blue-500',
    secondary: 'text-gray-500', 
    success: 'text-green-500',
    warning: 'text-amber-500',
    error: 'text-red-500'
  };

  return (
    <Icon 
      className={cn(
        // Base macOS icon styling
        'drop-shadow-sm',
        'stroke-[1.5]', // Slightly thinner strokes like SF Symbols
        'transition-all duration-200 ease-in-out',
        // Size
        sizeStyles[size],
        // Color variant
        variantStyles[variant],
        className
      )}
    />
  );
};

// Specific styled icons for common use cases
export const MacOSBookIcon = (props: Omit<MacOSIconProps, 'icon'>) => (
  <MacOSIcon {...props} icon={(iconProps) => (
    <svg
      {...iconProps}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  )} />
);

export const MacOSStarIcon = (props: Omit<MacOSIconProps, 'icon'>) => (
  <MacOSIcon {...props} icon={(iconProps) => (
    <svg
      {...iconProps}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
    </svg>
  )} />
);

export const MacOSCheckCircleIcon = (props: Omit<MacOSIconProps, 'icon'>) => (
  <MacOSIcon {...props} icon={(iconProps) => (
    <svg
      {...iconProps}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12l2 2 4-4"/>
      <circle cx="12" cy="12" r="10"/>
    </svg>
  )} />
);

export const MacOSXCircleIcon = (props: Omit<MacOSIconProps, 'icon'>) => (
  <MacOSIcon {...props} icon={(iconProps) => (
    <svg
      {...iconProps}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"/>
      <path d="m15 9-6 6"/>
      <path d="m9 9 6 6"/>
    </svg>
  )} />
);

export const MacOSTrophyIcon = (props: Omit<MacOSIconProps, 'icon'>) => (
  <MacOSIcon {...props} icon={(iconProps) => (
    <svg
      {...iconProps}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55.47.98.97 1.21C11.58 18.5 12 19.22 12 20v2"/>
      <path d="M14 14.66V17c0 .55-.47.98-.97 1.21C12.42 18.5 12 19.22 12 20v2"/>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
    </svg>
  )} />
);

export const MacOSPlusIcon = (props: Omit<MacOSIconProps, 'icon'>) => (
  <MacOSIcon {...props} icon={(iconProps) => (
    <svg
      {...iconProps}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 12h8"/>
      <path d="M12 8v8"/>
    </svg>
  )} />
);