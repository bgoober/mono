import { cn } from "~/lib/utils";

export default function H2(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className={cn(
        "text-primarytracking-tighter text-3xl font-extrabold",
        props.className,
      )}
    />
  );
}
