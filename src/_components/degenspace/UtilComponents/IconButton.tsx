import Image from "next/image";
import P from "../P";
import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/_components/ui/tooltip";

export const IconButton = ({
  iconPath,
  meta,
  onClick,
  hoverName,
}: {
  iconPath: string;
  onClick: () => void;
  meta: number;
  hoverName: string;
}) => {
  return (
    <React.Fragment>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex cursor-pointer flex-row items-center gap-[4px] rounded-full p-[10px] hover:bg-backgroundHover">
            <Image
              src={iconPath}
              alt="img"
              height={24}
              width={24}
              onClick={onClick}
            />
            <P className="text-[14px] font-bold">{meta}</P>
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" align="center">
          {hoverName}
        </TooltipContent>
      </Tooltip>
    </React.Fragment>
  );
};
