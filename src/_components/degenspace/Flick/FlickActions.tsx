"use client";
import { IconButton } from "../UtilComponents/IconButton";

export type FlickAction = {
  name: string;
  iconPath: string;
  count: number;
  onClick?: () => void;
  active?: boolean;
};

export const FlickActions = ({
  flickActions,
}: {
  flickActions: FlickAction[];
}) => {
  return (
    <div className="flex justify-between gap-2">
      {flickActions.map((act) => (
        <IconButton
          key={act.name}
          iconPath={act.iconPath}
          meta={act.count}
          hoverName={act.name}
          onClick={act.onClick}
          active={act.active}
        />
      ))}
    </div>
  );
};
