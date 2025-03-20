import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("text-7xl md:text-8xl font-bold", className)}>
      {children}
    </h1>
  );
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn("text-6xl md:text-7xl font-semibold", className)}>
      {children}
    </h2>
  );
}

export function H3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn("text-5xl md:text-6xl font-semibold", className)}>
      {children}
    </h3>
  );
}

export function H4({ children, className }: TypographyProps) {
  return (
    <h4 className={cn("text-4xl md:text-5xl font-semibold", className)}>
      {children}
    </h4>
  );
}

export function H5({ children, className }: TypographyProps) {
  return (
    <h5 className={cn("text-3xl md:text-4xl font-semibold", className)}>
      {children}
    </h5>
  );
}

export function H6({ children, className }: TypographyProps) {
  return (
    <h6 className={cn("text-3xl font-semibold", className)}>{children}</h6>
  );
}
