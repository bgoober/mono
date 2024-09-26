import { cn } from "~/lib/utils";

export default function P(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <p {...props} className={cn("text-md text-zinc-800", props.className)} />
  );
}
