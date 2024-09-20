import { cn } from "~/lib/utils/helpers";

export default function H1(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className={cn(
        "text-primarytracking-tighter text-4xl font-extrabold",
        props.className,
      )}
    />
  );
}
