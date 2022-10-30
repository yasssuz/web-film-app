// react, nextjs or any other library related content imports

// style imports
import styles from "./styles.module.scss";

// component imports

// service and util imports

// type imports

// interfaces
interface HeadingProps {
  variant: "large" | "medium" | "small" | "xsmall";
  as: `h${1 | 2 | 3 | 4 | 5 | 6}` | "b" | "strong";
  children: React.ReactNode;
}

export default function Heading({
  variant,
  as: Tag = "h1",
  children,
}: HeadingProps) {
  return (
    <Tag className={styles.title} data-variant={variant}>
      {children}
    </Tag>
  );
}
