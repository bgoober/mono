import { cn } from "~/lib/utils/helpers";

export default function H4(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h4
      {...props}
      className={cn(
        "text-primarytracking-tighter text-xl font-medium",
        props.className,
      )}
    />
  );
}
