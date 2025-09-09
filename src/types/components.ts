// Component-specific types and prop interfaces

import { ReactNode } from 'react';

// Base component props
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

// Button component types
export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'accent' 
  | 'outline' 
  | 'ghost' 
  | 'destructive';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  href?: string;
  external?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

// Card component types
export type CardVariant = 'default' | 'elevated' | 'outlined' | 'glass';

export interface CardProps extends BaseComponentProps {
  variant?: CardVariant;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
}

// Container component types
export interface ContainerProps extends BaseComponentProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  center?: boolean;
  padding?: boolean;
}

// Section component types
export interface SectionProps extends BaseComponentProps {
  background?: 'default' | 'muted' | 'gradient' | 'primary' | 'secondary';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  id?: string;
}

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'current';
  className?: string;
}

// Alert/Notification types
export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertProps extends BaseComponentProps {
  type: AlertType;
  title?: string;
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// Modal component types
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnBackdropClick?: boolean;
  showCloseButton?: boolean;
}

// Dropdown/Select types
export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
}

export interface DropdownProps extends BaseComponentProps {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  multiple?: boolean;
  searchable?: boolean;
  onChange: (value: string | string[]) => void;
  onSearch?: (query: string) => void;
}

// Navigation types
export interface NavigationItemProps {
  href: string;
  children: ReactNode;
  active?: boolean;
  external?: boolean;
  className?: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: Array<{
    name: string;
    href: string;
    description?: string;
  }>;
}

// Header component types
export interface HeaderProps extends BaseComponentProps {
  fixed?: boolean;
  transparent?: boolean;
  showCTA?: boolean;
}

// Footer component types
export interface FooterProps extends BaseComponentProps {
  showNewsletter?: boolean;
  showSocialLinks?: boolean;
  compact?: boolean;
}

// Image component types (for Cloudinary integration)
export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
  crop?: 'fill' | 'fit' | 'scale' | 'crop';
  gravity?: 'auto' | 'center' | 'north' | 'south' | 'east' | 'west';
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  onLoad?: () => void;
  onError?: () => void;
}

// Form component types
export interface FormFieldProps {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
}

export interface InputProps extends FormFieldProps {
  type?: 'text' | 'email' | 'tel' | 'password' | 'url' | 'search';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

export interface TextareaProps extends FormFieldProps {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  rows?: number;
  disabled?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

export interface SelectProps extends FormFieldProps {
  options: DropdownOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  multiple?: boolean;
  onChange?: (value: string | string[]) => void;
}

// Layout component types
export interface PageLayoutProps extends BaseComponentProps {
  title: string;
  description?: string;
  breadcrumbs?: Array<{
    name: string;
    href: string;
  }>;
  headerProps?: Partial<HeaderProps>;
  footerProps?: Partial<FooterProps>;
}

// Animation and transition types
export interface AnimationProps {
  initial?: Record<string, string | number | boolean>;
  animate?: Record<string, string | number | boolean>;
  exit?: Record<string, string | number | boolean>;
  transition?: Record<string, string | number | boolean>;
  delay?: number;
  duration?: number;
}

// Responsive breakpoint types
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ResponsiveValue<T> {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}