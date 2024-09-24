import { cn } from "~/lib/utils/helpers";

export const HorizontalLine = (props: { className?: string }) => {
  return (
    <div className={cn("h-[3px] w-full bg-border", props.className)}></div>
  );
};
