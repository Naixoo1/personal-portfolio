import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
  download?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-base gap-2",
  lg: "h-13 px-8 text-lg gap-2.5",
};

const variantClasses: Record<Variant, string> = {
  primary: `
    bg-accent text-white hover:bg-accent-hover
    shadow-md hover:shadow-glow
    active:scale-[0.97]
  `,
  secondary: `
    bg-transparent border border-surface-border text-foreground
    hover:bg-surface-hover hover:border-accent/30
    active:scale-[0.97]
  `,
  ghost: `
    bg-transparent text-foreground-muted hover:text-foreground
    hover:bg-accent-soft
    active:scale-[0.97]
  `,
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    icon,
    children,
    className = "",
  } = props;

  const baseClasses = `
    inline-flex items-center justify-center font-medium
    rounded-full transition-all duration-200
    focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
    focus-visible:ring-offset-background
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  if ("href" in props && props.href) {
    const linkProps = props as ButtonAsLink;
    if (linkProps.external || linkProps.download) {
      return (
        <a
          href={linkProps.href}
          className={baseClasses}
          target={linkProps.external ? "_blank" : undefined}
          rel={linkProps.external ? "noopener noreferrer" : undefined}
          download={linkProps.download}
        >
          {icon}
          {children}
        </a>
      );
    }
    return (
      <Link href={linkProps.href} className={baseClasses}>
        {icon}
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type || "button"}
      className={`${baseClasses} ${buttonProps.disabled || buttonProps.loading ? "opacity-50 pointer-events-none" : ""}`}
      disabled={buttonProps.disabled || buttonProps.loading}
      onClick={buttonProps.onClick}
    >
      {buttonProps.loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        icon
      )}
      {children}
    </button>
  );
}
