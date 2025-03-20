import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    size: {
      "28": "text-3xl",
      "22": "text-2xl",
      "20": "text-xl",
      "18": "text-lg",
      "16": "text-base",
      "14": "text-sm",
      "12": "text-xs",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
  },
  defaultVariants: {
    size: "16",
    weight: "regular",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  children: React.ReactNode;
}

export function Text({
  className,
  size,
  weight,
  children,
  ...props
}: TextProps) {
  return (
    <p className={cn(textVariants({ size, weight, className }))} {...props}>
      {children}
    </p>
  );
}
