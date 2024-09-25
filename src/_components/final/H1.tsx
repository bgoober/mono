import { cn } from "~/lib/utils";

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
